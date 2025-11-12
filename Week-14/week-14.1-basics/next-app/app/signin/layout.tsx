export default function loginlayout({ children }:{
    children: React.ReactNode
}) {
    return <div>
        <div className="border-b text-center">
            Login Layout
        </div>
        {children}
    </div>
}