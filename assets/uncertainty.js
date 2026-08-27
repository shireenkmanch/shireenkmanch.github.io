/* ---------------------------------------------------------------------------
   Masthead visual: one predicted path, and every future the same evidence
   allows. Particles are coloured by whether that future stays inside the lane,
   so the amber fraction IS the model's uncertainty about staying on the road.
   The set then collapses, because epistemic uncertainty is the kind that more
   observation removes.

   Needs THREE (loaded from the CDN in index.html). If THREE is missing the
   masthead simply stays blank and the rest of the page is unaffected.
--------------------------------------------------------------------------- */
(function () {
    var cv = document.getElementById('uncertainty-canvas');
    if (!cv || !window.THREE) return;
    var T = window.THREE;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var renderer = new T.WebGLRenderer({ canvas: cv, antialias: true });
    renderer.setClearColor(0xffffff, 1);
    var scene = new T.Scene();
    scene.fog = new T.Fog(0xffffff, 30, 145);
    var cam = new T.PerspectiveCamera(38, 1, 0.1, 400);

    function resize() {
        var r = cv.getBoundingClientRect();
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.setSize(r.width, r.height, false);
        cam.aspect = r.width / Math.max(1, r.height);
        // a short, wide band crops vertically, so open the lens as it widens
        cam.fov = cam.aspect > 2.4 ? 52 : (cam.aspect > 1.8 ? 45 : 38);
        cam.updateProjectionMatrix();
    }
    resize();
    window.addEventListener('resize', resize);

    var LANE = 3.4;                    // metres, half-width of the lane
    function path(t) {
        return new T.Vector3(
            Math.sin(t * 2.35) * 11 + Math.sin(t * 5.1) * 2.1,
            1.7 + Math.sin(t * 3.1) * 1.5,
            t * 118
        );
    }
    function spreadAt(t) { return Math.pow(t, 1.55) * 9.4; }

    var grid = new T.GridHelper(320, 64, 0xe4e4e4, 0xf0f0f0);
    grid.position.set(0, -0.6, 58);
    grid.material.transparent = true;
    grid.material.opacity = 0.5;
    scene.add(grid);

    function laneLine(sign) {
        var pts = [], k, t, P;
        for (k = 0; k <= 240; k++) {
            t = k / 240; P = path(t);
            pts.push(new T.Vector3(P.x + sign * LANE, -0.55, P.z));
        }
        var ln = new T.Line(
            new T.BufferGeometry().setFromPoints(pts),
            new T.LineDashedMaterial({ color: 0x9a9a96, dashSize: 1.4, gapSize: 1.1, transparent: true, opacity: 0.85 })
        );
        ln.computeLineDistances();
        return ln;
    }
    scene.add(laneLine(1));
    scene.add(laneLine(-1));

    function dotTex() {
        var c = document.createElement('canvas');
        c.width = c.height = 64;
        var g = c.getContext('2d'), r = g.createRadialGradient(32, 32, 0, 32, 32, 32);
        r.addColorStop(0, 'rgba(255,255,255,1)');
        r.addColorStop(0.35, 'rgba(255,255,255,.72)');
        r.addColorStop(1, 'rgba(255,255,255,0)');
        g.fillStyle = r; g.fillRect(0, 0, 64, 64);
        return new T.CanvasTexture(c);
    }

    var N = (navigator.hardwareConcurrency || 4) > 4 ? 42000 : 20000;
    var pos = new Float32Array(N * 3), col = new Float32Array(N * 3), base = new Float32Array(N * 4);
    function gauss() {
        var u = Math.random(), v = Math.random();
        return Math.sqrt(-2 * Math.log(u + 1e-9)) * Math.cos(6.283185 * v);
    }
    for (var i = 0; i < N; i++) {
        base[i * 4] = Math.pow(Math.random(), 0.72);
        base[i * 4 + 1] = gauss();
        base[i * 4 + 2] = gauss() * 0.62;
        base[i * 4 + 3] = Math.random() * 6.283185;
    }
    var geo = new T.BufferGeometry();
    geo.setAttribute('position', new T.BufferAttribute(pos, 3));
    geo.setAttribute('color', new T.BufferAttribute(col, 3));
    var mat = new T.PointsMaterial({
        size: 0.30, map: dotTex(), vertexColors: true, transparent: true,
        opacity: 0.42, depthWrite: false, sizeAttenuation: true
    });
    scene.add(new T.Points(geo, mat));

    var lp = [];
    for (var k2 = 0; k2 <= 240; k2++) lp.push(path(k2 / 240));
    scene.add(new T.Line(
        new T.BufferGeometry().setFromPoints(lp),
        new T.LineBasicMaterial({ color: 0x1f2421, transparent: true, opacity: 0.88 })
    ));
    var head = new T.Mesh(new T.SphereGeometry(0.40, 20, 20), new T.MeshBasicMaterial({ color: 0x1f2421 }));
    head.position.copy(path(0.015));
    scene.add(head);

    var IN_R = 0.420, IN_G = 0.275, IN_B = 0.757;      /* #6b46c1 in lane   */
    var OUT_R = 0.878, OUT_G = 0.541, OUT_B = 0.180;   /* #E08A2E left lane */

    var SHOTS = [
        { d: 4.2, cp: [3.4, 2.4, -6.6], ct: [0, 1.7, 3], c: 0.045,
          h: 'One predicted path.', p: 'the model commits to a single answer' },
        { d: 5.2, cp: [-27, 17, -13], ct: [2, 3, 44], c: 1.0,
          h: 'Every path the same evidence allows.', p: '42,000 futures, one observation' },
        { d: 5.6, cp: [6, 4.8, 34], ct: [-4, 2.4, 88], c: 1.0,
          h: 'Far enough ahead, it cannot say whether it stays in the lane.', p: 'amber has left the lane' },
        { d: 4.8, cp: [25, 13, 25], ct: [0, 2, 62], c: 1.0,
          h: 'So it looks again, and the set collapses.', p: 'this is the uncertainty that data removes' },
        { d: 3.6, cp: [13, 7.4, 4], ct: [0, 1.8, 34], c: 0.05,
          h: 'Knowing when it does not know.', p: 'nothing leaves the lane' }
    ];
    var TOTAL = 0;
    for (var q = 0; q < SHOTS.length; q++) TOTAL += SHOTS[q].d;

    function ease(u) { return u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2; }
    function V(a) { return new T.Vector3(a[0], a[1], a[2]); }

    var el = {
        h: document.getElementById('uv-head'), p: document.getElementById('uv-sub'),
        box: document.getElementById('uv-caption'), v: document.getElementById('uv-value'),
        l: document.getElementById('uv-label')
    };
    var shown = -1, t0 = performance.now();

    function frame(now) {
        var et = ((now - t0) / 1000) % TOTAL;
        if (reduce) et = 8.0;
        var idx = 0, acc = 0;
        while (idx < SHOTS.length - 1 && et > acc + SHOTS[idx].d) { acc += SHOTS[idx].d; idx++; }
        var u = (et - acc) / SHOTS[idx].d, e = ease(Math.min(1, u));
        var A = SHOTS[idx], B = SHOTS[(idx + 1) % SHOTS.length];

        cam.position.copy(V(A.cp).lerp(V(B.cp), e));
        cam.lookAt(V(A.ct).lerp(V(B.ct), e));
        var collapse = A.c + (B.c - A.c) * e;

        var arr = geo.attributes.position.array, cArr = geo.attributes.color.array;
        var tt = now * 0.00045, outFar = 0, nFar = 0;

        for (var j = 0; j < N; j++) {
            var t = base[j * 4], av = base[j * 4 + 1], bv = base[j * 4 + 2], ph = base[j * 4 + 3];
            var P = path(t), sp = spreadAt(t) * collapse;
            var br = reduce ? 0 : Math.sin(tt * 1.7 + ph) * 0.13;
            var lat = av * sp * (1 + br);
            arr[j * 3] = P.x + lat;
            arr[j * 3 + 1] = Math.max(-0.4, P.y + bv * sp * 0.55 * (1 + br));
            arr[j * 3 + 2] = P.z + Math.cos(ph) * sp * 0.30;

            var out = Math.abs(lat) > LANE;
            cArr[j * 3] = out ? OUT_R : IN_R;
            cArr[j * 3 + 1] = out ? OUT_G : IN_G;
            cArr[j * 3 + 2] = out ? OUT_B : IN_B;
            if (t > 0.72) { nFar++; if (out) outFar++; }
        }
        geo.attributes.position.needsUpdate = true;
        geo.attributes.color.needsUpdate = true;
        mat.opacity = 0.15 + 0.30 * Math.min(1, collapse * 1.6);

        el.v.textContent = (nFar ? (outFar / nFar * 100) : 0).toFixed(0) + '%';
        el.l.textContent = 'of futures leave the lane';

        if (idx !== shown) {
            shown = idx;
            el.box.classList.remove('on');
            (function (n) {
                setTimeout(function () {
                    el.h.textContent = SHOTS[n].h;
                    el.p.textContent = SHOTS[n].p;
                    el.box.classList.add('on');
                }, 260);
            })(idx);
        }
        renderer.render(scene, cam);
        requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
})();
