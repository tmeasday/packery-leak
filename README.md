Proof that packery 1.2.3 leaks in a couple of ways

1. Simple proof -- call `window.createPackery()` a bunch of times, garbage collecting in between. Note that the memory footprint goes up.

2. Slightly more complex -- hit the toggle button a bunch of times, GC-ing each time. Note that memory footprint goes up.

Both cases are solved by using 1.4.0