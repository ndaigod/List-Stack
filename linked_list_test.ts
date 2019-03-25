import LinkedList from './../src/linked_list';
import {expect} from 'chai';
import 'mocha';

describe('Linked List', () => {
    it('check add element in empty list', () => {
        const linkedList = new LinkedList<number>();

        linkedList.add(1, 0);

        expect(linkedList.top.getData()).to.equal(1);
        expect(linkedList.getSize()).to.equal(1);
    });

    it('check add element in the beginning of list', () => {
        const linkedList = new LinkedList<number>([1,2,3,4]);

        linkedList.add(1, 0);

        expect(linkedList.top.getData()).to.equal(1);
        expect(linkedList.getSize()).to.equal(5);
    });

    it('check add element in the middle of list', () => {
        const linkedList = new LinkedList<number>([1,2,3,4]);

        linkedList.add(1, 2);

        expect(linkedList.get(2)).to.equal(1);
        expect(linkedList.getSize()).to.equal(5);
    });

    it('check add element in the end of list', () => {
        const linkedList = new LinkedList<number>([1,2,3,4]);

        linkedList.add(1, 4);

        expect(linkedList.get(4)).to.equal(1);
        expect(linkedList.getSize()).to.equal(5);
    });

    it('check remove element from empty list', () => {
        const linkedList = new LinkedList<number>();

        linkedList.remove(1);

        expect(linkedList.top).to.equal(undefined);
        expect(linkedList.getSize()).to.equal(0);
    });

    it('check remove element from the beginning of list', () => {
        const linkedList = new LinkedList<number>([1,2,3,4]);

        linkedList.remove(0);

        expect(linkedList.top.getData()).to.equal(2);
        expect(linkedList.getSize()).to.equal(3);
    });

    it('check remove element from the middle of list', () => {
        const linkedList = new LinkedList<number>([1,2,3,4]);

        linkedList.remove(1);

        expect(linkedList.get(1)).to.equal(3);
        expect(linkedList.getSize()).to.equal(3);
    });

    it('check remove element from the end of list', () => {
        const linkedList = new LinkedList<number>([1,2,3,4]);

        linkedList.remove(3);

        expect(linkedList.get(2)).to.equal(3);
        expect(linkedList.getSize()).to.equal(3);
    });

    it('check get element from empty list', () => {
        const linkedList = new LinkedList<number>();

        expect(linkedList.get(2)).to.equal(undefined);
    });

    it('check get not existing element from list', () => {
        const linkedList = new LinkedList<number>([1,2,3,4]);

        expect(linkedList.get(10)).to.equal(undefined);
    });

    it('check get existing element from list', () => {
        const linkedList = new LinkedList<number>([1,2,3,4]);

        expect(linkedList.get(2)).to.equal(3);
    });

    it('check get size from empty list', () => {
        const linkedList = new LinkedList<number>();

        expect(linkedList.getSize()).to.equal(0);
    });

    it('check get size from not empty list', () => {
        const linkedList = new LinkedList<number>([1,2,3,4]);

        expect(linkedList.getSize()).to.equal(4);
    });

    it('check equals with empty list', () => {
        const firstLinkedList = new LinkedList<number>([1,2,3,4]);
        const secondLinkedList = new LinkedList<number>();

        expect(firstLinkedList.equals(secondLinkedList)).to.equal(false);
    });

    it('check equals with equal list', () => {
        const firstLinkedList = new LinkedList<number>([1,2,3,4]);
        const secondLinkedList = new LinkedList<number>([1,2,3,4]);

        expect(firstLinkedList.equals(secondLinkedList)).to.equal(true);
    });

    it('check equals with not equal list', () => {
        const firstLinkedList = new LinkedList<number>([1,2,3,4]);
        const secondLinkedList = new LinkedList<number>([1,2,3,100]);

        expect(firstLinkedList.equals(secondLinkedList)).to.equal(false);
    });

    it('check to string with empty list', () => {
        const linkedList = new LinkedList<number>();

        expect(linkedList.toString()).to.equal('List\'s empty.');
    });

    it('check to string with not empty list', () => {
        const linkedList = new LinkedList<number>([1,2,3,4]);

        expect(linkedList.toString()).to.equal('[1],[2],[3],[4]');
    });

})