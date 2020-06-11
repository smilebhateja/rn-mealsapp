import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Category {
    constructor(id, title, color) {
        this.id = id;
        this.title = title;
        this.color = color;
    }
}
