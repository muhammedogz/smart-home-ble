import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import useBLE from "./useBLE";
import { PulseIndicator } from "./PulseIndicator";
import DeviceModal from "./DeviceConnectionModal";
import NotConnectedView from "./NotConnectedView";
import ConnectedView from "./ConnectedView";

const App = () => {
  // const {
  //   requestPermissions,
  //   scanForPeripherals,
  //   allDevices,
  //   connectToDevice,
  //   connectedDevice,
  //   heartRate,
  //   disconnectFromDevice,
  // } = useBLE();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  // const scanForDevices = async () => {
  //   const isPermissionsEnabled = await requestPermissions();
  //   if (isPermissionsEnabled) {
  //     scanForPeripherals();
  //   }
  // };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const openModal = async () => {
    // await scanForDevices();
    setIsModalVisible(true);
  };

  // console.log("allDevices", allDevices);

  const connectedDevice = true;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        {connectedDevice ? (
          <ConnectedView openModal={openModal} />
        ) : (
          <NotConnectedView openModal={openModal} />
        )}
      </ScrollView>
      {/* <DeviceModal
        closeModal={hideModal}
        visible={isModalVisible}
        connectToPeripheral={connectToDevice}
        devices={allDevices}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  heartRateTitleText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 20,
    color: "black",
  },
  heartRateText: {
    fontSize: 25,
    marginTop: 15,
  },
  ctaButton: {
    backgroundColor: "#FF6060",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "90%",
    marginHorizontal: 20,
    marginBottom: 5,
    borderRadius: 8,
  },
  ctaButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default App;
