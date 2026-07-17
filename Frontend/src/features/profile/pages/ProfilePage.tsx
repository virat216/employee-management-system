import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "../../../layouts/MainLayout";
import PageHeader from "../../../components/common/PageHeader";

import ProfileCard from "../components/ProfileCard";

import { getProfile } from "../services/profileService";

import type { Profile } from "../types/profile";

import { useAuth } from "../../../auth/useAuth";

export default function ProfilePage() {

    const [profile, setProfile] = useState<Profile | null>(null);

    const [loading, setLoading] = useState(true);

    const { logout } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {

        const fetchProfile = async () => {

            try {

                const response = await getProfile();

                setProfile(response.data);

            } finally {

                setLoading(false);

            }

        };

        fetchProfile();

    }, []);

    const handleLogout = () => {

        logout();

        navigate("/login");

    };

    return (

        <MainLayout>

            <PageHeader
                title="My Profile"
                subtitle="View your account information"
            />

            {loading && (

                <div className="text-center py-10 text-gray-500">

                    Loading...

                </div>

            )}

            {!loading && profile && (

                <ProfileCard
                    profile={profile}
                    onLogout={handleLogout}
                />

            )}

        </MainLayout>

    );

}