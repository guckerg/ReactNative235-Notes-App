import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const NoteItem = ({ note, onDelete }) => {
  return (
    <View style={styles.noteItem}>
      <Text style={styles.noteText}> {note.text} </Text>
      <TouchableOpacity
        onPress={() => {
          onDelete(note.$id);
          console.log("pressed");
        }}
      >
        <Text>DELETE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  noteItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  noteText: {
    fontSize: 18,
  },
});

export default NoteItem;
