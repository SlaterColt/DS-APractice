package com.codewithmosh;

import java.util.Arrays;
import java.util.Set;

public class Main {

    public static void main(String[] args) {
	// write your test code here

        // Test Array Class
        Array array = new Array (5);
        array.insert (10);
        array.insert (20);
        array.insert(10);
        array.insert (3);

        array.reverse ();
        //array.print ();

        // Test Linked List Class

        var list = new LinkedList ();
        list.addLast (10);
        list.addLast (20);
        list.addLast (30);
        System.out.println(list.contains (40));
        list.removeLast ();
       var linkedArray = list.toArray ();
       //System.out.println(Arrays.toString (linkedArray));
       list.reverse ();
       linkedArray = list.toArray ();
       //System.out.println(Arrays.toString (linkedArray));

    }
}
