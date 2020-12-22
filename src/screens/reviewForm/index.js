import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Formik } from 'formik';
import * as yup from 'yup';

import { styles } from './style';
import Button from '../../components/button';

const ReviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0;
        })
})

export default function ReviewForm({ addReview }) {

    const renderMainView = () => {
        return (
            <View style={styles.container}>
                {renderComponents()}
            </View>
        )
    };

    /*
    ..######...#######..##.....##.########...#######..##....##.########.##....##.########..######.
    .##....##.##.....##.###...###.##.....##.##.....##.###...##.##.......###...##....##....##....##
    .##.......##.....##.####.####.##.....##.##.....##.####..##.##.......####..##....##....##......
    .##.......##.....##.##.###.##.########..##.....##.##.##.##.######...##.##.##....##.....######.
    .##.......##.....##.##.....##.##........##.....##.##..####.##.......##..####....##..........##
    .##....##.##.....##.##.....##.##........##.....##.##...###.##.......##...###....##....##....##
    ..######...#######..##.....##.##.........#######..##....##.########.##....##....##.....######.
    */

    const renderComponents = () => {
        return (
            <View style={styles.container}>
                <Formik
                    initialValues={{ title: '', body: '', rating: '' }}
                    validationSchema={ReviewSchema}
                    onSubmit={(values, actions) => {
                        actions.resetForm();
                        addReview(values);
                        // console.log(values);
                    }}
                >
                    {(props) => (
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder="Review title"
                                onChangeText={props.handleChange('title')}
                                value={props.values.title}
                                onBlur={props.handleBlur('title')}
                            />
                            <Text style={styles.errorsText}>{props.touched.title && props.errors.title}</Text>
                            <TextInput
                                multiline
                                minHeight={80}
                                style={styles.input}
                                placeholder="Review body"
                                onChangeText={props.handleChange('body')}
                                value={props.values.body}
                                onBlur={props.handleBlur('body')}
                            />
                            <Text style={styles.errorsText}>{props.touched.body && props.errors.body}</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Rating 1-5"
                                keyboardType="numeric"
                                onChangeText={props.handleChange('rating')}
                                value={props.values.rating}
                                onBlur={props.handleBlur('rating')}
                            />
                            <Text style={styles.errorsText}>{props.touched.rating && props.errors.rating}</Text>
                            {/* <TouchableOpacity onPress={props.handleSubmit} style={styles.submitBtn} >
                                <Text style={styles.btnText}>Submit</Text>
                            </TouchableOpacity> */}
                            <Button text='Submit' onPress={props.handleSubmit} />
                        </View>
                    )}
                </Formik>
            </View>
        )
    };

    return (
        renderMainView()
    );
}
