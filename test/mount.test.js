/* eslint-env jest */

import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from '../src';
import { BasicPure } from './fixtures/pure-function';
import { BasicClass, ClassWithPure, ClassWithDirectPure, ClassWithDirectComponent } from './fixtures/class';

it('converts basic pure mount', () => {
    const mounted = mount(
        <BasicPure className="pure"><strong>Hello!</strong></BasicPure>
    );

    expect(mountToJson(mounted)).toMatchSnapshot();
});

it('converts basic class mount', () => {
    const mounted = mount(
        <BasicClass className="class"><strong>Hello!</strong></BasicClass>
    );

    expect(mountToJson(mounted)).toMatchSnapshot();
});

it('converts a class mount with a pure function in it', () => {
    const mounted = mount(
        <ClassWithPure className="class"><strong>Hello!</strong></ClassWithPure>
    );

    expect(mountToJson(mounted)).toMatchSnapshot();
});

it('converts a class mount with a pure function in it as a direct child', () => {
    const mounted = mount(
        <ClassWithDirectPure className="class"><strong>Hello!</strong></ClassWithDirectPure>
    );

    expect(mountToJson(mounted)).toMatchSnapshot();
});

it('converts a class mount with a class component in it as a direct child', () => {
    const mounted = mount(
        <ClassWithDirectComponent className="class"><strong>Hello!</strong></ClassWithDirectComponent>
    );

    expect(mountToJson(mounted)).toMatchSnapshot();
});
