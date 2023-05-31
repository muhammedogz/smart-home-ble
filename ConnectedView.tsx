import { ReactNode } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

type InfoTextProps = {
  text: string;
  value: string | number;
  icon: ReactNode;
  backgroundColor?: string;
  textColor?: string;
};

const InfoText = ({
  text,
  value,
  icon,
  backgroundColor = "#d4a027",
  textColor = "#ffffff",
}: InfoTextProps) => {
  return (
    <View
      style={{
        padding: 20,
        width: "45%",
        backgroundColor: backgroundColor,
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
        borderRadius: 20,
        // flexDirection: "row",
      }}
    >
      {icon}
      <Text
        style={{
          fontSize: 25,
          color: textColor,
        }}
      >
        {text}
      </Text>
      <Text
        style={{
          fontSize: 25,
          color: "#ffffff",
          backgroundColor: "#9f0707",
          borderRadius: 10,
          borderWidth: 3,
          borderColor: "#c7c7c7",
          padding: 20,
        }}
      >
        {value}
      </Text>
    </View>
  );
};

type Bilgiler = {
  sıcaklık: number;
  nem: number;
  lamba1: boolean;
  lamba2: boolean;
  pencere1: boolean;
  pencere2: boolean;
  kapı: boolean;
  dumansensoru: boolean;
  hareketsensoru: boolean;
};

type ConnectedViewProps = {
  openModal: () => void;
};

const ConnectedView = ({ openModal }: ConnectedViewProps) => {
  const bilgiler: Bilgiler = {
    nem: 20,
    sıcaklık: 20,
    dumansensoru: true,
    hareketsensoru: false,
    kapı: true,
    lamba1: true,
    lamba2: false,
    pencere1: true,
    pencere2: false,
  };

  return (
    <View
      style={{
        paddingTop: 50,

        gap: 20,
        padding: 20,
        width: "100%",
        paddingBottom: 100,
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
        Sisteme bağlandınız. Hoş geldiniz
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          textAlign: "center",
          color: "black",
        }}
      >
        Bilgiler
      </Text>
      <View
        style={{
          paddingTop: 20,
          flex: 1,
          gap: 20,
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <InfoText
          text="Nem"
          value={bilgiler.nem}
          backgroundColor="#4cb9c1"
          icon={
            <MaterialCommunityIcons
              name="air-humidifier"
              size={40}
              color="#ffffff"
            />
          }
        />
        <InfoText
          text="Sıcaklık"
          value={bilgiler.sıcaklık}
          icon={
            <FontAwesome5 name="temperature-high" size={40} color="#ffffff" />
          }
        />
        <InfoText
          text="Yangın Alarmı"
          value={bilgiler.dumansensoru ? "Açık" : "Kapalı"}
          backgroundColor="#e44d15"
          icon={<FontAwesome5 name="fire" size={40} color="#ffffff" />}
        />
        <InfoText
          text="Hırsız Alarmı"
          value={bilgiler.hareketsensoru ? "Açık" : "Kapalı"}
          backgroundColor="#28953f"
          icon={
            <MaterialCommunityIcons
              name="handcuffs"
              size={40}
              color="#ffffff"
            />
          }
        />
        <InfoText
          text="Kapı"
          value={bilgiler.kapı ? "Açık" : "Kapalı"}
          backgroundColor="#5c3415"
          icon={<FontAwesome5 name="key" size={40} color="#ffffff" />}
        />
        <InfoText
          text="Lamba 1"
          value={bilgiler.lamba1 ? "Açık" : "Kapalı"}
          backgroundColor="#ccd313"
          icon={<FontAwesome5 name="lightbulb" size={40} color="#ffffff" />}
        />
        <InfoText
          text="Lamba 2"
          value={bilgiler.lamba2 ? "Açık" : "Kapalı"}
          backgroundColor="#ccd313"
          icon={<FontAwesome5 name="lightbulb" size={40} color="#ffffff" />}
        />
        <InfoText
          text="Pencere 1"
          value={bilgiler.pencere1 ? "Açık" : "Kapalı"}
          backgroundColor="#6195ab"
          icon={
            <MaterialCommunityIcons
              name="window-closed-variant"
              size={40}
              color="#ffffff"
            />
          }
        />
        <InfoText
          text="Pencere 2"
          value={bilgiler.pencere2 ? "Açık" : "Kapalı"}
          backgroundColor="#6195ab"
          icon={
            <MaterialCommunityIcons
              name="window-closed-variant"
              size={40}
              color="#ffffff"
            />
          }
        />
      </View>
    </View>
  );
};

export default ConnectedView;
