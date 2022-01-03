import classes from "./modal.module.css";
import { HiCamera } from "react-icons/hi";
import { useContext, useRef, useState } from "react";
import { ModalStatusContextDispath } from "../../context/modalContext";
import { UserauthContext } from "../../context/userAuthContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const Modal = () => {
  const picPicker = useRef(null);
  const [serverName, setServerName] = useState("");
  const [selectedImg, setSelectedImg] = useState(null);
  const dispatch = useContext(ModalStatusContextDispath);
  const { user } = useContext(UserauthContext);
  const handleCloseModal = () => {
    dispatch({
      type: "clearedData",
      modalStatus: false,
      newServer: {
        serverName: null,
        serverImg: null,
      },
    });
  };

  const addProfileImage = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedImg(readerEvent.target.result);
    };
  };

  const handleSubmitdata = async () => {
    dispatch({
      type: "enteredData",
      modalStatus: false,
    });

    const docRef = await addDoc(collection(db, "servers"), {
      serverName: serverName,
      createdBy: user,
    });
    const imageRef = ref(storage, `servers/${docRef.id}/serverProfile`);
    if (selectedImg) {
      await uploadString(imageRef, selectedImg, "data_url").then(async () => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "servers", docRef.id), {
          image: downloadURL,
          id: docRef.id,
        });
      });
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className="inputs">
          <input
            value={serverName}
            onChange={(e) => setServerName(e.target.value)}
            type="text"
            placeholder="Enter server name name"
          />
          <div
            className={classes.imgPicker}
            onClick={() => picPicker.current.click()}
          >
            <HiCamera />
            <input
              type="file"
              hidden
              accept="image/*"
              ref={picPicker}
              onChange={addProfileImage}
            />
          </div>
        </div>
        <div className={classes.buttons}>
          <button onClick={handleSubmitdata} type="submit">
            Submit
          </button>
          <button onClick={handleCloseModal} type="button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
