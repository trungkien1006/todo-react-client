import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // Lưu vào localStorage
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import filterSlice from "./slices/filterSlice"
import todoListSlice from "./slices/todoListSlice"
import modalSlice from "./slices/modalSlice"
import sorterSlice from "./slices/sorterSlice"
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist/es/constants";

// Cấu hình persist
const persistConfig = {
  key: "root", // Key dùng để lưu state
  storage, 
};

// Kết hợp reducers để persist
const rootReducer = combineReducers({
  filter: filterSlice,
  todoList: todoListSlice,
  modal: modalSlice,
  sorter: sorterSlice
});

// Tạo persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Tạo Redux Store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Bỏ qua cảnh báo
      },
  }),
});

// Tạo persistor
export const persistor = persistStore(store);
export default store;
