import Stack from './../src/stack';
import {expect} from 'chai';
import 'mocha';

describe('Stack', () => {
    it('check push element in empty stack', () => {
        const stack = new Stack<number>();

        stack.push(1);

        expect(stack.top.getData()).to.equal(1);
        expect(stack.getSize()).to.equal(1);
    });

    it('check push element in not empty stack', () => {
        const stack = new Stack<number>([1,2,3,4]);

        stack.push(5);

        expect(stack.top.getData()).to.equal(5);
        expect(stack.getSize()).to.equal(5);
    });

    it('check pop element from empty stack', () => {
        const stack = new Stack<number>();

        expect(stack.pop()).to.equal(undefined);
        expect(stack.getSize()).to.equal(0);
    });

    it('check pop element from not empty stack', () => {
        const stack = new Stack<number>([1,2,3,4]);

        expect(stack.pop()).to.equal(4);
        expect(stack.getSize()).to.equal(3);
    });

    it('check get size from empty stack', () => {
        const stack = new Stack<number>();

        expect(stack.getSize()).to.equal(0);
    });

    it('check get size from not empty stack', () => {
        const stack = new Stack<number>([1,2,3,4]);

        expect(stack.getSize()).to.equal(4);
    });

    it('check equals with empty stack', () => {
        const firstStack = new Stack<number>([1,2,3,4]);
        const secondStack = new Stack<number>();

        expect(firstStack.equals(secondStack)).to.equal(false);
    });

    it('check equals with equal stack', () => {
        const firstStack = new Stack<number>([1,2,3,4]);
        const secondStack = new Stack<number>([1,2,3,4]);

        expect(firstStack.equals(secondStack)).to.equal(true);
    });

    it('check equals with not equal stack', () => {
        const firstStack = new Stack<number>([1,2,3,4]);
        const secondStack = new Stack<number>([1,2,3,100]);

        expect(firstStack.equals(secondStack)).to.equal(false);
    });

    it('check to string with empty stack', () => {
        const stack = new Stack<number>();

        expect(stack.toString()).to.equal('Stack\'s empty.');
    });

    it('check to string with not empty stack', () => {
        const stack = new Stack<number>([1,2,3,4]);

        expect(stack.toString()).to.equal('[4],[3],[2],[1]');
    });

})