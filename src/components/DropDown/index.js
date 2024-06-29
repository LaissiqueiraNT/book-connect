import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import ModalDropdown from 'react-native-modal-dropdown';

const DropDown = (props) => {
    return (
        <SafeAreaView>
            <Text style={{ fontSize: 15, fontWeight: '700', marginBottom: 5 }}>{props.label}</Text>
            <ModalDropdown
                options={['Opção 1', 'Opção 2']}
                style={styles.dropdown}
                textStyle={styles.dropdownText}
                dropdownStyle={styles.dropdownStyle}
                defaultValue={props.defaultValue}
                editable={props.editable}
                onSelect={(index, value) => setSelectedValue(value)}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    dropdown: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        padding: 8,
        marginBottom:10,
    },
    dropdownText: {
        fontSize: 16,
        color: '#000000',
    },
    dropdownStyle: {
        width: '80%',
        height: 'auto',
    },
});

export default DropDown;
