import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { BlogCard } from './extra/card-component';
 
 
class Blog extends Component {
   data=   [
        {
            "comments": [],
            "timeStamp": "2020-01-30T23:19:56.577Z",
            "_id": "5e3365f201cda8c79a1b0298",
            "image": "https://cdn.pixabay.com/photo/2016/03/27/20/58/sky-1284256__480.jpg",
            "content": "bhwdhwbwhbhjwhjdhwdbwjdwhjchjdchhchssbjhbhj<br>sbchdxbdbdxhbdwbdqbdehbqhbdwhqdhwqbhhwjqdqjhdqwjdqwhjdqwhj<br>qwbcqwbdhxwqchbqhwdbxqwhjdbqwhdxbqwhbdqhwdwdhjqwjdhwhjbdwhdbwhheqjdbwdhjbwhdwqqwdbhjqwdhehjdhwqdqwhdbhhdwhwhdhdwhdwhdwqhdqwdqdwqdwdwdwqdxqdqwwswqsdqwqwdsqwdwdwdqdwddwqwddqwwwdqwdqwdqwd",
            "title": "Is Doncic the future of the NBA.Look at this numbers. hwdhwdhb",
            "tag": "hostel",
            "__v": 0
        },
        {
            "comments": [],
            "timeStamp": "2020-01-30T23:19:56.577Z",
            "_id": "5e3365a101cda8c79a1b0297",
            "image": "https://cdn.pixabay.com/photo/2015/06/02/12/59/narrative-794978_960_720.jpg",
            "content": "bhwdhwbwhbhjwhjdhwdbwjdwhjchjdchhchssbjhbhj<br>sbchdxbdbdxhbdwbdqbdehbqhbdwhqdhwqbhhwjqdqjhdqwjdqwhjdqwhj<br>qwbcqwbdhxwqchbqhwdbxqwhjdbqwhdxbqwhbdqhwdwdhjqwjdhwhjbdwhdbwhheqjdbwdhjbwhdwqqwdbhjqwdhehjdhwqdqwhdbhhdwhwhdhdwhdwhdwqhdqwdqdwqdwdwdwqdxqdqwwswqsdqwqwdsqwdwdwdqdwddwqwddqwwwdqwdqwdqwd",
            "title": "KD scores 40 in golden state blowout. h3hdvwdwvdghqhgqwdhv",
            "tag": "school",
            "__v": 0
        },
        {
            "comments": [],
            "timeStamp": "2020-01-30T23:19:56.577Z",
            "_id": "5e33656201cda8c79a1b0296",
            "image": "https://cdn.pixabay.com/photo/2016/07/27/01/36/basketball-1544370__480.jpg",
            "content": "bhwdhwbwhbhjwhjdhwdbwjdwhjchjdchhchssbjhbhj<br>sbchdxbdbdxhbdwbdqbdehbqhbdwhqdhwqbhhwjqdqjhdqwjdqwhjdqwhj<br>qwbcqwbdhxwqchbqhwdbxqwhjdbqwhdxbqwhbdqhwdwdhjqwjdhwhjbdwhdbwhheqjdbwdhjbwhdwqqwdbhjqwdhehjdhwqdqwhdbhhdwhwhdhdwhdwhdwqhdqwdqdwqdwdwdwqdxqdqwwswqsdqwqwdsqwdwdwdqdwddwqwddqwwwdqwdqwdqwd",
            "title": "jsut a test hjdhejwdwdwh hwudwhdw iwdhbwd kbwhdhbw",
            "tag": "school",
            "__v": 0
        },
        {
            "comments": [],
            "timeStamp": "2020-01-30T23:19:56.577Z",
            "_id": "5e3364f001cda8c79a1b0295",
            "image": "https://cdn.pixabay.com/photo/2018/09/01/08/24/kevingarnett-3646278__480.jpg",
            "content": "bhwdhwbwhbhjwhjdhwdbwjdwhjchjdchhchssbjhbhj<br>sbchdxbdbdxhbdwbdqbdehbqhbdwhqdhwqbhhwjqdqjhdqwjdqwhjdqwhj<br>qwbcqwbdhxwqchbqhwdbxqwhjdbqwhdxbqwhbdqhwdwdhjqwjdhwhjbdwhdbwhheqjdbwdhjbwhdwqqwdbhjqwdhehjdhwqdqwhdbhhdwhwhdhdwhdwhdwqhdqwdqdwqdwdwdwqdxqdqwwswqsdqwqwdsqwdwdwdqdwddwqwddqwwwdqwdqwdqwd",
            "title": "The day that man mad things hvsjcsdgwd gdywdwyd",
            "tag": "school",
            "__v": 0
        }
    ]

    componentDidMount(){
        StatusBar.setHidden(true)
    }
    handlePress=()=>{
        alert("jjddjxwddw")
    }
    render() { 
        return (
            <View style={styles.container}>
               {this.data.map((item)=>(
                 <BlogCard
                     onClick= {this.handlePress}
                    key={item._id}
                    date= {item.timeStamp}
                    tag={item.tag}
                    img={item.image}
                    title={item.title}
                />
               ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
 
export default Blog;