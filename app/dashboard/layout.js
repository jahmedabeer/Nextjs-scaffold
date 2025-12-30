
export default function DashboardLayout({ children }) {
  return (
        <div className="bg-orange-50 p-3">
            <ul className="flex gap-5 p-4">
                <li>
                  Analytics
                </li>
                <li>Settings</li>
            </ul>
            {children}
        </div>
  );
}
