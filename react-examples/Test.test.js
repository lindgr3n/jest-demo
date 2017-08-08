import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme'

import TestComponent from './Test'

describe('<Test>', () => {
    /*
    beforeEach(() => {
        initializeDatabase();
    });

    afterEach(() => {
        clearDatabase();
    });
    */

    it('Should render component', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TestComponent />, div);
    })

    it('Snapshottesting', () => {
        const tree = renderer.create(<TestComponent />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('Snapshottesting with enzyme', () => {
        const result = shallow(<TestComponent />)
        expect(result).toMatchSnapshot()
    })

    it('Check correct value for item', () => {
        const result = shallow(<TestComponent />)
        // Works like queryselector
        const thirdItem = result.find('.icon-test-3')
        expect(thirdItem.text()).toEqual('Three')
    })

    it('Should contain three <i> elements', () => {
        const result = shallow(<TestComponent />)
        const iElements = result.find('i')
        expect(iElements.length).toEqual(3)
    })

    it('Snapshot should match number of elements', () => {
        const result = shallow(<TestComponent />)
        const iElements = result.find('i')
        expect(iElements.length).toMatchSnapshot()
    })
}) 