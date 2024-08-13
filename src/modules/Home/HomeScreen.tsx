import React from "react";
import { useLanguage } from "../../hook/lenguage";
import { useTheme } from "../../hook/theme";
import { useNavigate } from "react-router-dom";
import PageWrapperCustom from "../../components/common/page/custom/PageWrapperCustom";
import fondo from "../../assets/fondo.webp";

const HomeScreen: React.FC = () => {
    const { translations } = useLanguage();
    const { isDarkTheme } = useTheme();

    const navigate = useNavigate();

    const handleNavigateToPresentation = () => {
        navigate("/presentacion");
    };

    const handleNavigateToWorkExperience = () => {
        navigate("/experience");
    };

    const handleNavigateToStudies = () => {
        navigate("/studies");
    };

    return (
        <PageWrapperCustom>
            <div className="relative flex items-center justify-center h-full">
                <img src={fondo} alt="fondo" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-5xl font-bold">
                    {translations['home.Title']}
                    </h1>
                </div>
            </div>
        </PageWrapperCustom>
    );
};

export default HomeScreen;
