import { database } from "./appwrite";

const databaseService = {
  //List documents
  async listDocuments(dbId, colId) {
    try {
      const response = await database.listDocuments(dbId, colId);
      return response.documents || [];
    } catch (error) {
      console.error("error fetching documents", error.message);
      return { error: error.message };
    }
  },
  //Create document
  async createDocument(dbId, colId, data, id = null) {
    try {
      return await databaseService.createDocument(
        dbId,
        colId,
        id || undefined,
        data
      );
    } catch (error) {
      console.error("Error creating document", error.message);
    }
  },
  //Delete Document
  async deleteDocument(dbId, colId, id) {
    try {
      await databaseService.deleteDocument(dbId, colId, id);
      return { success: true };
    } catch (error) {
      console.error("error deleting document", error.message);
      return {
        error: error.message,
      };
    }
  },
};

export default databaseService;
