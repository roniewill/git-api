import { Platform } from 'react-native';

export default {
    header: {
        height: (Platform.OS === 'ios') ? 70 : 50,
        paddingTop: (Platform.OS === 'ios') ? 30 : 0,
        backgroundColor: "#fff",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: 'row',
        paddingHorizontal: 20
      },
      headerText: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'center',
      },
      btnAdd: {
        fontSize: 30,
        color: '#4da6ff'
      }
}