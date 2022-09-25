package com.codewithmosh;

import java.util.HashSet;
import java.util.Set;

public class Array {

    private int count = 0;
    private int[] items;

    public Array() {}

    public Array(int length) {
        this.items = new int[length];
    }

    public void insert(int item) {
        // Create a new array (twice the size) if array is full
        resizeIfRequired ();
        items[count++] = item;
    }

    public void resizeIfRequired() {
        if (items.length == count) {
            int[] newItems = new int[count * 2];
            // Copy all existing items
            for (int i = 0; i < count; i++) {
                newItems[i] = items[i];
            }
            // Set Items to the newItems array
            items = newItems;
        }
    }

    public void removeAt(int index){

        // validate the index
        if (index < 0 || index >= count) {
            throw new IllegalArgumentException();
        }
        // Shift the items to the left to fill the hole
        for (int i = index; i < count; i++) {
            items[i] = items[i + 1];
        }
        count--;
    }

    public void print() {
        for (int i = 0; i < count; i++) {
            System.out.println(items[i]);
        }
    }

    public int indexOf(int item){
        // If we find it, return index
        // Otherwise, return -1
        // 0(1)
        // 0(n)
        for (int i = 0; i < count; i++)
            if (items[i] == item)
                return i;

        return -1;
    }

    public int max() {
        if (count == 0) {
            throw new IllegalStateException ();
        }
        int max = 0;
        for (int i = 0; i < count; i++) {
            if (items[i] > max) {
                max = items[i];
            }
        }
        return max;
    }

    public Array intersect(Array other) {
        var intersection = new Array(count);

        for (int item : items){
            if (other.indexOf (item) >= 0)
                intersection.insert (item);
        }
        return intersection;
    }

    public Set<Integer> intersectSet (Array other) {
        Set<Integer> set = new HashSet<> ();

        for (int item : items){
            if (other.indexOf (item) >= 0)
                set.add(item);
        }
        return set;
    }

    public void reverse() {
        int[] reversed = new int[count];

        for (int i = 0; i < count; i++) {
            reversed[i] = items[count - i - 1];
        }
        items = reversed;
    }

    public void insertAt(int item, int index) {
        if (index > count || index < 0) {
            throw new IllegalArgumentException ();
        }
        resizeIfRequired ();

        for (int i = count - 1; i >= index; i--)
            items[i + 1] = items[i];

        items[index] = item;
    }
}