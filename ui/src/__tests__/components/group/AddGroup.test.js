/*
 * Copyright 2020 Verizon Media
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
import { render, fireEvent, waitFor, screen, cleanup } from '@testing-library/react';
import AddGroup from '../../../components/group/AddGroup';
import API from "../../../api";
import {GROUP_MEMBER_PLACEHOLDER} from "../../../components/constants/constants";

describe('AddGroup', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render', () => {
        let domain = 'domain';
        const onClose = jest.fn();
        const { getByTestId } = render(
            <AddGroup
                api={API()}
                domain={domain}
                justificationRequired={true}
                showAddGroup={true}
                onCancel={onClose}
            />
        );
        const addGroupForm = getByTestId('add-group');
        expect(addGroupForm).toMatchSnapshot();
    });

    it('should throw error for group name 1', async () => {
        let domain = 'domain';
        const onClose = jest.fn();
        const onSubmit = jest.fn();
        const _csrf = '_csrf';
        let api = API();

        const{ getByText } = render(
            <AddGroup
                _csrf={_csrf}
                api={api}
                onSubmit={onSubmit}
                domain={domain}
                justificationRequired={true}
                showAddGroup={true}
                onCancel={onClose}
            />
        );
        expect(
            screen.getByPlaceholderText("Enter New Group Name")
        ).toBeInTheDocument();
        fireEvent.change(
            screen.getByPlaceholderText("Enter New Group Name"),
            {
                target: { value: 'testgroup:test' },
            }
        );
        fireEvent.change(
            screen.getByPlaceholderText("Enter justification here"),
            {
                target: { value: 'justification' },
            }
        );
        const button = getByText('Submit')
        fireEvent.click(button);
        await waitFor(() => {
            expect(
                screen.getByText('Group name doesn\'t match regex:',
                    { exact: false }
                    ),
            ).toBeInTheDocument();
        });
    });

    it('should throw error for group name 2', async () => {
        let domain = 'domain';
        const onClose = jest.fn();
        const onSubmit = jest.fn();
        const _csrf = '_csrf';
        let api = API();

        const{ getByText } = render(
            <AddGroup
                _csrf={_csrf}
                api={api}
                onSubmit={onSubmit}
                domain={domain}
                justificationRequired={true}
                showAddGroup={true}
                onCancel={onClose}
            />
        );
        expect(
            screen.getByPlaceholderText("Enter New Group Name")
        ).toBeInTheDocument();

        fireEvent.change(
            screen.getByPlaceholderText("Enter justification here"),
            {
                target: { value: 'justification' },
            }
        );
        fireEvent.change(
            screen.getByPlaceholderText("Enter New Group Name"),
            {
                target: { value: 'group(123)' },
            }
        );
        const button = getByText('Submit')
        fireEvent.click(button);
        await waitFor(() => {
            expect(
                screen.getByText('Group name doesn\'t match regex:',
                    { exact: false }
                ),
            ).toBeInTheDocument();
        });
    });

    it('should throw error for group name 3', async () => {
        let domain = 'domain';
        const onClose = jest.fn();
        const onSubmit = jest.fn();
        const _csrf = '_csrf';
        let api = API();

        const{ getByText } = render(
            <AddGroup
                _csrf={_csrf}
                api={api}
                onSubmit={onSubmit}
                domain={domain}
                justificationRequired={true}
                showAddGroup={true}
                onCancel={onClose}
            />
        );
        expect(
            screen.getByPlaceholderText("Enter New Group Name")
        ).toBeInTheDocument();

        fireEvent.change(
            screen.getByPlaceholderText("Enter justification here"),
            {
                target: { value: 'justification' },
            }
        );
        fireEvent.change(
            screen.getByPlaceholderText("Enter New Group Name"),
            {
                target: { value: 'group/123' },
            }
        );
        const button = getByText('Submit')
        fireEvent.click(button);
        await waitFor(() => {
            expect(
                screen.getByText('Group name doesn\'t match regex:',
                    { exact: false }
                ),
            ).toBeInTheDocument();
        });
    });

    it('should not throw error for group name', async () => {

        let domain = 'domain';
        const onClose = jest.fn();
        const onSubmit = jest.fn();
        const _csrf = '_csrf';
        let api = API();
        api = {
            listGroups: jest.fn(() =>
                Promise.resolve([])
            ),
            addGroup: jest.fn(() => Promise.resolve()),
        }
        const{ getByText } = render(
            <AddGroup
                _csrf={_csrf}
                api={api}
                onSubmit={onSubmit}
                domain={domain}
                justificationRequired={true}
                showAddGroup={true}
                onCancel={onClose}
            />
        );
        expect(
            screen.getByPlaceholderText("Enter New Group Name")
        ).toBeInTheDocument();

        fireEvent.change(
            screen.getByPlaceholderText("Enter justification here"),
            {
                target: { value: 'justification' },
            }
        );
        const button = getByText('Submit')
        fireEvent.change(
            screen.getByPlaceholderText("Enter New Group Name"),
            {
                target: { value: 'group.test' },
            }
        );
        fireEvent.click(button);
        await waitFor( () => {
            expect(onSubmit.mock.calls.length).toBe(1);
        });
    });

    it('should throw error for group member name 1', async () => {
        let domain = 'domain';
        const onClose = jest.fn();
        const onSubmit = jest.fn();
        const _csrf = '_csrf';
        let api = API();

        const{ getByText } = render(
            <AddGroup
                _csrf={_csrf}
                api={api}
                onSubmit={onSubmit}
                domain={domain}
                justificationRequired={true}
                showAddGroup={true}
                onCancel={onClose}
            />
        );
        expect(
            screen.getByPlaceholderText(GROUP_MEMBER_PLACEHOLDER)
        ).toBeInTheDocument();

        fireEvent.change(
            screen.getByPlaceholderText("Enter justification here"),
            {
                target: { value: 'justification' },
            }
        );
        fireEvent.change(
            screen.getByPlaceholderText(GROUP_MEMBER_PLACEHOLDER),
            {
                target: { value: 'home.test:group.test' },
            }
        );
        const button = getByText('Add')
        fireEvent.click(button);
        await waitFor(() => {
            expect(
                screen.getByText('Member name doesn\'t match regex: ',
                    { exact: false }
                ),
            ).toBeInTheDocument();
        });
    });

    it('should throw error for group member name 2', async () => {
        let domain = 'domain';
        const onClose = jest.fn();
        const onSubmit = jest.fn();
        const _csrf = '_csrf';
        let api = API();

        const{ getByText } = render(
            <AddGroup
                _csrf={_csrf}
                api={api}
                onSubmit={onSubmit}
                domain={domain}
                justificationRequired={true}
                showAddGroup={true}
                onCancel={onClose}
            />
        );
        expect(
            screen.getByPlaceholderText(GROUP_MEMBER_PLACEHOLDER)
        ).toBeInTheDocument();

        fireEvent.change(
            screen.getByPlaceholderText("Enter justification here"),
            {
                target: { value: 'justification' },
            }
        );
        fireEvent.change(
            screen.getByPlaceholderText(GROUP_MEMBER_PLACEHOLDER),
            {
                target: { value: 'user.test1.' },
            }
        );
        const button = getByText('Add')
        fireEvent.click(button);
        await waitFor(() => {
            expect(
                screen.getByText('Member name doesn\'t match regex: ',
                    { exact: false }
                ),
            ).toBeInTheDocument();
        });
    });

    it('should throw error for group member name 3', async () => {
        let domain = 'domain';
        const onClose = jest.fn();
        const onSubmit = jest.fn();
        const _csrf = '_csrf';
        let api = API();

        const{ getByText } = render(
            <AddGroup
                _csrf={_csrf}
                api={api}
                onSubmit={onSubmit}
                domain={domain}
                justificationRequired={true}
                showAddGroup={true}
                onCancel={onClose}
            />
        );
        expect(
            screen.getByPlaceholderText(GROUP_MEMBER_PLACEHOLDER)
        ).toBeInTheDocument();

        fireEvent.change(
            screen.getByPlaceholderText("Enter justification here"),
            {
                target: { value: 'justification' },
            }
        );
        fireEvent.change(
            screen.getByPlaceholderText(GROUP_MEMBER_PLACEHOLDER),
            {
                target: { value: 'unix.service.test/' },
            }
        );
        const button = getByText('Add')
        fireEvent.click(button);
        await waitFor(() => {
            expect(
                screen.getByText('Member name doesn\'t match regex: ',
                    { exact: false }
                ),
            ).toBeInTheDocument();
        });
    });

    it('should not throw error for group member name', async () => {

        let domain = 'domain';
        const onClose = jest.fn();
        const onSubmit = jest.fn();
        const _csrf = '_csrf';
        let api = API();
        api = {
            listGroups: jest.fn(() =>
                Promise.resolve([])
            ),
            addGroup: jest.fn(() => Promise.resolve()),
        }
        const{ getByText } = render(
            <AddGroup
                _csrf={_csrf}
                api={api}
                onSubmit={onSubmit}
                domain={domain}
                justificationRequired={true}
                showAddGroup={true}
                onCancel={onClose}
            />
        );
        expect(
            screen.getByPlaceholderText("Enter New Group Name")
        ).toBeInTheDocument();

        fireEvent.change(
            screen.getByPlaceholderText("Enter justification here"),
            {
                target: { value: 'justification' },
            }
        );
        const button = getByText('Submit')
        fireEvent.change(
            screen.getByPlaceholderText("Enter New Group Name"),
            {
                target: { value: 'group.test' },
            }
        );
        fireEvent.change(
            screen.getByPlaceholderText(GROUP_MEMBER_PLACEHOLDER),
            {
                target: { value: 'user.test' },
            }
        );
        fireEvent.click(button);
        await waitFor( () => {
            expect(onSubmit.mock.calls.length).toBe(1);
        });
    });
});
