Components can only return 1 element

Solution: Wrap blocks of code under a <div><div>
    -
    function ListGroup() {
        <Fragment>
            <h1>List</h1>
            <ul>
                <li>list1</li>
                <li>list2</li>
            </ul>
        </Fragment>
    }
Concern: This adds an extra element to the DOM just to statisfy React;

Solution: Fragments
    -import { Fragment } from "react";
    -select div, "cmd + d" (mac)
    - replace 'div' with 'Fragment'

Solution:
    - skip importing fragments
    - and use <> </>

Shortcuts: wrap block of code w emmet abbrviations
    cmnd shift p: emmet abbrviations
    