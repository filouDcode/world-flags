import React from 'react';

const Logo = () => {
    return (
       <div className="logo">
       {/* pour les images importés dans la balise 'img' les chemins d'accés se font comme si on était dans le dossier 'public'. */}
        <img src="./logo192.png" alt="react logo" />
        <h2>React World</h2>
       </div>
    );
};

export default Logo;