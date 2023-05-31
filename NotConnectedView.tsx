import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type NotConnectedViewProps = {
  openModal: () => void;
};

const NotConnectedView = ({ openModal }: NotConnectedViewProps) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 200,
        padding: 20,
        width: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
          color: "black",
        }}
      >
        Akıllı ev sistemi uygulamasına hoş geldiniz
      </Text>
      <Text
        style={{
          fontSize: 25,
          marginTop: 15,
          textAlign: "center",
        }}
      >
        Cihazınıza bağlanmak için lütfen bağlan tuşuna basınız
      </Text>
      <TouchableOpacity
        // onPress={connectedDevice ? disconnectFromDevice : openModal}
        onPress={openModal}
        style={{
          backgroundColor: "#5ba2ce",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          marginHorizontal: 20,
          marginBottom: 5,
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "#ffffff",
          }}
        >
          {/* {connectedDevice ? "Disconnect" : "Connect"} */}
          Bağlan
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotConnectedView;
