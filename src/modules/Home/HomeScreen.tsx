import React from "react";
import { useLanguage } from "../../hook/lenguage";
import PageWrapperCustom from "../../components/common/page/custom/PageWrapperCustom";
import fondo from "../../assets/fondo.webp";

const HomeScreen: React.FC = () => {
    const { translations } = useLanguage();

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
