import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Modal,
  ActivityIndicator,
  Slider,
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Icon, Textarea, CheckBox, Spinner } from "native-base";
import Colors from "../../constants/Colors";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import WebView from "react-native-webview";
import PreviewModal from "./PreviewModal";
import PrintModal from "./PrintModal";
import CommentModal from "./CommentModal";

const MaterialItem = () => {
  return (
    <>
      <TouchableOpacity style={styles.actionIcon}>
        {/* <Slider  /> */}
        <MaterialIcon
          name="file-download"
          size={30}
          color={Colors.white}
          style={styles.icon}
        />
      </TouchableOpacity>
    </>
  );
};
const styles = EStyleSheet.create({
  content: {
    marginTop: "20rem",
  },
  materialItem: {
    width: "90%",
    height: "200rem",
    alignSelf: "center",
    overflow: "hidden",
    borderTopLeftRadius: "20rem",
    borderTopRightRadius: "20rem",
    borderBottomLeftRadius: "20rem",
    borderBottomRightRadius: "20rem",
    marginTop: "10rem",
  },
  gradient: {
    height: "200rem",
    padding: "10rem",
  },
  courseCode: {
    fontSize: "37rem",
    fontWeight: "bold",
    color: "#fff",
  },
  courseTitle: {
    fontSize: "20rem",
    color: "#fff",
    fontFamily: "Itim",
    marginLeft: "2rem",
    lineHeight: "20rem",
    paddingTop: "4rem",
  },
  courseTitleText: {
    // fontSize: '25rem',
    paddingTop: "10rem",
  },
  courseTitleTextModal: {
    fontSize: "30rem",
    paddingTop: "10rem",
  },
  modal: {
    backgroundColor: "rgba(360, 360, 360, 0.2)",
    flex: 1,
    justifyContent: "flex-end",
  },
  modalView: {
    backgroundColor: Colors.black,
    height: "87%",
    borderTopLeftRadius: "100rem",
    borderTopRightRadius: "100rem",
    shadowColor: "#3F4141",
    shadowOffset: {
      width: -2.5,
      height: -2.5,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    width: "50rem",
    height: "50rem",
    alignSelf: "center",
    marginTop: "20rem",
    borderRadius: "25rem",
    justifyContent: "center",
    alignContent: "center",
  },
  icon: {
    alignSelf: "center",
    justifyContent: "center",
  },
  imageWrapper: {
    width: "340rem",
    height: "200rem",
    overflow: "hidden",
    borderRadius: "10rem",
    justifyContent: "center",
    alignSelf: "center",
  },
  image: {
    width: "340rem",
    height: "200rem",
  },
  description: {
    marginLeft: "24rem",
    marginTop: "30rem",
  },
  action: {
    marginLeft: "24rem",
    marginTop: "30rem",
    flexDirection: "row",
    marginLeft: "30rem",
  },
  actionIcon: {
    width: "50rem",
    height: "50rem",
    backgroundColor: "#CF2154",
    borderRadius: "40rem",
    marginRight: "40rem",
    alignContent: "center",
    justifyContent: "center",
  },
  header: {
    marginTop: "52rem",
    flexDirection: "row",
  },
  backText: {
    fontSize: "20rem",
    color: "#fff",
    fontFamily: "Itim",
    padding: "2rem",
  },
  iconHeader: {
    color: "#fff",
    margin: "0rem",
  },
  printIcon: {
    top: "-10rem",
    marginLeft: "65rem",
  },
  printText: {
    left: "-76rem",
    fontSize: "18rem",
    marginTop: "10rem",
  },
  deliveryContent: {
    //  marginTop:"20rem",
    padding: "10rem",
  },
  contentItem: {
    marginTop: "20rem",
  },
  button: {
    width: "170rem",
    justifyContent: "center",
    alignSelf: "center",
    overflow: "hidden",
    height: "36rem",
    borderRadius: "10rem",
  },
  buttonWrapper: {
    marginTop: "10rem",
    marginBottom: "300rem",
  },
  buttonText: {
    justifyContent: "center",
    alignSelf: "center",
  },
  flexRow: {
    flexDirection: "row",
  },
  flexColumn: {
    flexDirection: "column",
  },
  textArea: {
    color: "#fff",
    borderWidth: "1rem",
    borderColor: "#fff",
    marginLeft: "10rem",
    marginRight: "10rem",
    marginTop: "6rem",
    borderRadius: "5rem",
    fontFamily: "Itim",
    padding: "0rem",
    height: "125rem",
    paddingTop: "5rem",
    paddingLeft: "10rem",
    paddingRight: "5rem",
  },
  textInput: {
    height: "30rem",
  },
  signText: {
    fontSize: "20rem",
    textAlign: "center",
    color: Colors.white,
  },
  plus: {
    left: "-1rem",
    backgroundColor: "#514A4A",
    width: "40rem",
    height: "28rem",
    borderTopLeftRadius: "20rem",
    borderBottomLeftRadius: "20rem",
  },
  minus: {
    right: "-1rem",
    backgroundColor: "#514A4A",
    width: "40rem",
    height: "28rem",
    borderTopRightRadius: "20rem",
    borderBottomRightRadius: "20rem",
  },
  copiesNumber: {
    width: "130rem",
    height: "40rem",
    color: "#fff",
    backgroundColor: "#514A4A",
    textAlign: "center",
    top: "-7rem",
    borderRadius: "10rem",
  },
  copiesNumberWrapper: {
    marginLeft: "70rem",
  },
});
export default MaterialItem;
