import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import { scaleH, scaleV, ColorConst } from '../ultis'

export const CustomDropDownPicker = ({
    open,
    selectedValue,
    listItems,
    setOpen,
    setSelectedValue,
    setItems,
    borderColor,
    placeholder
}) => {
    return (
        <DropDownPicker
            open={open}
            value={selectedValue}
            items={listItems}
            setOpen={setOpen}
            placeholder={placeholder}
            setValue={setSelectedValue}
            setItems={setItems}
            showArrowIcon={false}
            style={{
                borderColor: borderColor ? borderColor : open ? ColorConst.DEEP_GREEN : ColorConst.NEUTRAL_LIGHT,
                height: scaleV(48),
                marginBottom: scaleV(16),
                borderRadius: 5
            }}
            dropDownContainerStyle={{
                borderColor: ColorConst.NEUTRAL_LIGHT
            }}
            textStyle={{
                color: ColorConst.NEUTRAL_GREY,
                fontSize: scaleH(12),
                fontWeight: '700',
                lineHeight: scaleV(21.6)
            }}
            selectedItemLabelStyle={{
                color: ColorConst.PRIMARY_BLUE
            }}
            listItemLabelStyle={{
                fontWeight: '400'
            }}
            arrowIconStyle={{
                width: scaleH(24),
                height: scaleH(24)
            }}
            showTickIcon={false}
        />
    )
}