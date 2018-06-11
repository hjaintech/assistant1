import React from 'react';
import { View, Modal, TouchableHighlight, Text } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Fab, Form, Item, Input, Label, DatePicker } from 'native-base';

const NewTask = () => {

    return (
        <View>
            <Form>
                <Item >
                    <Label>Event Type</Label>
                    <Input />
                </Item>
                <Item >
                    <Label>Event Name</Label>
                    <Input />
                </Item>
                <Item>
                    <Label>Last Date of Occurence</Label>
                    <DatePicker
                        locale={"en"}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="Select date"
                    />
                </Item>
                <Item>
                    <Label>Next Date of occurence</Label>
                    <DatePicker
                        locale={"en"}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="Select date"
                    />
                </Item>
            </Form>
        </View>
    );
}

export default NewTask;