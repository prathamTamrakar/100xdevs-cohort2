import axios from "axios";
import { atom, selector } from "recoil";

// export const notifications = atom({
//     key: "networkAtom",
//     default: {
//         network: 4, 
//         jobs: 6, 
//         messaging: 3, 
//         notifications: 3
//     }
// });
// idempotant

export const notifications  = atom({
    key: "networkAtom",
    default: selector({
        key: "networkAtommSelector",
        get: async ()=>{
            await new Promise(r => setTimeout(r, 5000)) // Sleep for 5 seconds
            const res = await axios.get("http://localhost:8080/notifications")
            return res.data
        }
    })
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})