import { Routes, Route, Link, Navigate } from 'react-router-dom'
import { AboutPage } from './AboutPage'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { Navbar } from './Navbar'

export const MainApp = () => {
	return (
		<>
			<h1>Main app</h1>
            <Navbar />
			<hr />


            <Routes>
                <Route 
                    path="/" 
                    element={<HomePage />} 
                />
                <Route 
                    path="/about" 
                    element={<AboutPage />}
                />
                <Route 
                    path="/login"
                    element={<LoginPage />}
                />
                <Route 
                    path="/*"
                    element={<Navigate to="./" />}
                />
            </Routes>
		</>
	)
}
