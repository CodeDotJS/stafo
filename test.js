import test from 'ava';
import fn from './';

test(async t => {
	const gitStar = await fn.stars('codedotjs/instavim');
	const gitFork = await fn.forks('codedotjs/instavim');

	t.is(gitStar, '3');
	t.is(gitFork, '0');
});
