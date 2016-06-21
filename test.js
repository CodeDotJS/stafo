import test from 'ava';
import fn from './';

test(async t => {
	const gitStar = await fn.stars('facebook/react');
	const gitFork = await fn.forks('facebook/react');

	t.is(gitStar, '44,022');
	t.is(gitFork, '7,587');
});
