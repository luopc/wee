/* global QUnit */

QUnit.module('Data');

// Method: data.request(opt)

QUnit.test('Request JSON', 1, function(assert) {
	var done = assert.async();

	Wee.data.request({
		url: 'sample.json',
		json: true,
		success: function(data) {
			assert.strictEqual(data.name, 'Wee', 'JSON data requested successfully.');
			done();
		}
	});
});

QUnit.test('Request JSON & Parse', 1, function(assert) {
	var done = assert.async();

	Wee.data.request({
		url: 'sample.json',
		json: true,
		template: '{{ name }}',
		success: function(data) {
			assert.strictEqual(data, 'Wee', 'JSON data requested and parsed successfully.');
			done();
		}
	});
});

// Method: data.parse(str, obj, opt)

QUnit.test('Parse Template', 3, function(assert) {
	assert.strictEqual(Wee.data.parse('{{ name }}', {
		name: 'Keith'
	}), 'Keith', 'Single variable parsed successfully.');

	assert.strictEqual(Wee.data.parse('{{ name }}', {}), '', 'Unavailable variable cleared successfully.');

	assert.strictEqual(Wee.data.parse('{{ name || Keith }}', {}), 'Keith', 'Variable fallback output successfully.');
});