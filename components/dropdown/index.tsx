import { Dropdown, MenuProps } from 'antd'
import React from 'react'

const BeatifulDropDown = ({ items, children }: { items: MenuProps['items'], children: React.ReactNode }) => {

    return (
        <Dropdown menu={{ items }} placement='bottomRight' trigger={['click']} overlayClassName='!min-w-[165px] post-bubble-dropdown'>

            {children}
        </Dropdown>
    )
}

export default BeatifulDropDown