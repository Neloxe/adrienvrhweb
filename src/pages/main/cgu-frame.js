/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import '../css/cgu.css' // Fichier de style CSS externe pour la page

function CGUPage() {
  return (
    <div className="cgu-container">
      <h1 className="cgu-title">
        Conditions Générales d'Utilisation (CGU) - Frame It
      </h1>
      <p className="cgu-last-updated">
        Date de dernière mise à jour : 19/07/2023
      </p>

      <h2>Définitions</h2>
      <p>
        "Frame It" fait référence à l'application mobile et au site web associé.
      </p>
      <p>
        "Utilisateur" désigne toute personne utilisant Frame It, qu'elle soit
        créateur d'événements ou simple participant.
      </p>

      <h2>Utilisation de l'Application</h2>
      <p>
        a. Eligibilité : Pour utiliser Frame It, vous devez être âgé d'au moins
        13 ans ou avoir atteint l'âge de la majorité dans votre pays de
        résidence, selon le plus élevé des deux.
      </p>
      <p>
        b. Création d'événements : Les utilisateurs de Frame It peuvent créer
        des événements et les partager avec d'autres utilisateurs. Vous êtes
        entièrement responsable du contenu que vous publiez, y compris les
        informations relatives à l'événement, les photos, les commentaires et
        tout autre contenu associé.
      </p>
      <p>
        c. Participation aux événements : Les utilisateurs peuvent participer
        aux événements créés par d'autres utilisateurs. En participant à un
        événement, vous consentez à respecter les règles et les directives
        énoncées par l'organisateur de l'événement.
      </p>
      <p>
        d. Confidentialité : Nous respectons votre vie privée. Veuillez
        consulter notre Politique de Confidentialité pour comprendre comment
        nous recueillons, utilisons et partageons vos informations personnelles.
      </p>

      <h2>Contenu Utilisateur</h2>
      <p>
        a. Propriété du Contenu : Vous conservez la propriété de tout le contenu
        que vous publiez sur Frame It. En soumettant du contenu, vous accordez à
        Frame It une licence mondiale, non exclusive et transférable pour
        utiliser, afficher et distribuer votre contenu dans le cadre de la
        fourniture des services de l'application.
      </p>
      <p>
        b. Respect des droits d'auteur : Vous ne devez pas publier de contenu
        qui enfreint les droits d'auteur, les marques de commerce, les brevets
        ou tout autre droit de propriété intellectuelle d'autrui.
      </p>
      <p>
        c. Contenu Inapproprié : Il est strictement interdit de publier tout
        contenu offensant, diffamatoire, violent, pornographique ou illégal sur
        Frame It.
      </p>

      <h2>Responsabilités de l'Utilisateur</h2>
      <p>
        a. Exactitude des Informations : Vous êtes responsable de l'exactitude
        des informations que vous fournissez lors de votre inscription et de la
        création d'événements.
      </p>
      <p>
        b. Respect des Lois : Vous vous engagez à respecter toutes les lois
        applicables lors de l'utilisation de Frame It.
      </p>
      <p>
        c. Comportement Respectueux : Vous vous engagez à ne pas harceler,
        intimider, menacer ou perturber d'autres utilisateurs de Frame It.
      </p>

      <h2>Modifications et Interruptions</h2>
      <p>
        a. Modifications de l'Application : Frame It se réserve le droit de
        modifier, mettre à jour ou interrompre tout ou partie de l'application
        sans préavis.
      </p>
      <p>
        b. Interruptions du Service : Frame It ne garantit pas que l'application
        sera exempte d'interruptions, d'erreurs ou de pannes, et ne peut être
        tenu responsable des perturbations du service.
      </p>

      <h2>Limitation de Responsabilité</h2>
      <p>
        Frame It ne peut être tenu responsable des dommages directs, indirects,
        accessoires, spéciaux ou consécutifs résultant de l'utilisation ou de
        l'incapacité d'utiliser l'application.
      </p>

      <h2>Loi Applicable</h2>
      <p>
        Les présentes CGU sont régies par les lois en vigueur dans [Indiquer le
        pays ou la région] et tout litige relatif à ces conditions sera soumis à
        la compétence exclusive des tribunaux compétents de cette juridiction.
      </p>

      <p className="cgu-contact">
        En utilisant l'application Frame It, vous acceptez de respecter les
        présentes CGU. Si vous avez des questions ou des préoccupations
        concernant ces conditions, veuillez nous contacter à{' '}
        <a href="mailto:adrienverhaeghe@gmail.com">adrienverhaeghe@gmail.com</a>
        .
      </p>

      <p>
        Merci d'utiliser Frame It et profitez pleinement de vos expériences
        d'événements partagées !
      </p>
    </div>
  )
}

export default CGUPage
