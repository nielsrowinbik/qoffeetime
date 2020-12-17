import { useCallback, useState } from "react";
import Modal from "react-modal";

import { Button } from "../components/Button";
import { ButtonGroup } from "../components/ButtonGroup";
import { BackButton } from "../components/BackButton";
import { FixedFooter } from "../components/FixedFooter";
import { Main } from "../components/Layout";
import { Nav, NavHeading } from "../components/Nav";
import { RecipeDropdown, VolumeDropdown } from "../components/RecipeDropdown";

import { getStaticRecipies } from "../utils/recipies";

Modal.setAppElement("#__next");

const TimelineView = ({ recipies }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [recipe, setRecipe] = useState("");
    const [volume, setVolume] = useState("");

    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);

    const onRecipeSelect = useCallback((newRecipe) => setRecipe(newRecipe), []);
    const onVolumeSelect = useCallback((newVolume) => setVolume(newVolume), []);

    return (
        <>
            <Nav>
                <BackButton />
                <NavHeading>Coffee Timeline</NavHeading>
            </Nav>
            <Main></Main>
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
                    value={volume}
                />
                <ButtonGroup>
                    <Button>Add</Button>
                </ButtonGroup>
                <p onClick={closeModal}>Cancel</p>
            </Modal>
        </>
    );
};

export { getStaticRecipies as getStaticProps };

export default TimelineView;
