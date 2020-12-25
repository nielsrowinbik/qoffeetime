import { useCallback, useState } from "react";
import Modal from "react-modal";

import { BrewsList } from "../components/BrewsList";
import { Button } from "../components/Button";
import { ButtonGroup } from "../components/ButtonGroup";
import { BackButton } from "../components/BackButton";
import { FixedFooter } from "../components/FixedFooter";
import { Main } from "../components/Layout";
import { Nav, NavHeading } from "../components/Nav";
import { RecipeDropdown, VolumeDropdown } from "../components/RecipeDropdown";

import { useBrews } from "../hooks/use-brews-context";

import { getStaticRecipies } from "../utils/recipies";

Modal.setAppElement("#__next");

const TimelineView = ({ recipies }) => {
    const { brews, createBrew } = useBrews();

    const [modalIsOpen, setIsOpen] = useState(false);
    const [recipe, setRecipe] = useState("");
    const [volumeStr, setVolumeStr] = useState("");

    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);

    const onRecipeSelect = useCallback((newRecipe) => setRecipe(newRecipe), []);
    const onVolumeSelect = useCallback(
        (newVolume) => setVolumeStr(newVolume),
        []
    );

    const onAddButtonClick = useCallback(() => {
        const volume = parseInt(volumeStr.replace("ml", ""));
        const brew = {
            coffee: Math.round((recipies[recipe].ratio / 1000) * volume),
            recipe,
            volume,
        };

        createBrew(brew).then(closeModal);
    }, [recipe, volumeStr]);

    return (
        <>
            <Nav>
                <BackButton />
                <NavHeading>Coffee Timeline</NavHeading>
            </Nav>
            <Main>
                <BrewsList brews={brews} recipies={recipies} />
            </Main>
            <FixedFooter>
                <Button onClick={openModal}>Add coffee consumption</Button>
            </FixedFooter>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={openModal}
                onRequestClose={closeModal}
                contentLabel="Add coffee"
                style={{
                    content: {
                        backgroundColor: "#ff1744",
                        border: "none",
                        borderRadius: 16,
                        inset: "auto 40px",
                        textAlign: "center",
                    },
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        display: "grid",
                        placeItems: "center",
                    },
                }}
            >
                <h4>Add coffee</h4>
                <RecipeDropdown
                    onChange={onRecipeSelect}
                    recipies={recipies}
                    value={recipe}
                />
                <VolumeDropdown
                    onChange={onVolumeSelect}
                    recipe={recipies[recipe]}
                    value={volumeStr}
                />
                <ButtonGroup>
                    <Button onClick={onAddButtonClick}>Add</Button>
                </ButtonGroup>
                <p onClick={closeModal}>Cancel</p>
            </Modal>
        </>
    );
};

export { getStaticRecipies as getStaticProps };

export default TimelineView;
