/*
 * Copyright The Athenz Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';
import AddRuleForm from '../../../components/policy/AddRuleForm';
import { renderWithRedux } from '../../../tests_utils/ComponentsTestUtils';

describe('AddRuleForm', () => {
    it('should render', () => {
        const { getByTestId } = renderWithRedux(<AddRuleForm />);
        const addRuleForm = getByTestId('add-rule-form');
        expect(addRuleForm).toMatchSnapshot();
    });
    it('should render failed to load roles', () => {
        const { getByTestId } = renderWithRedux(<AddRuleForm />);
        const addRuleForm = getByTestId('add-rule-form');
        expect(addRuleForm).toMatchSnapshot();
    });
});
