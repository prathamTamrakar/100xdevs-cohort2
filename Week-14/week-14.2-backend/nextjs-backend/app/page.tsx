import axios from "axios";

// Async Server Component
export default async function Home() {
  const userData = await getUserDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    <strong>Name:</strong> {userData?.name}
                </div>

                <div>
                    <strong>Email:</strong> {userData?.email}
                </div>
            </div>
        </div>
    </div>
  );
}

async function getUserDetails() {
  await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate network delay
  const response = await axios.get('https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details').then(res => res.data);
  return response;
}
