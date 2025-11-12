export default function internallayout({ children }:{
    children: React.ReactNode
}) {
    return <div>
        <div className="border-b text-center">
            Internal Layout
        </div>
        {children}
    </div>
}