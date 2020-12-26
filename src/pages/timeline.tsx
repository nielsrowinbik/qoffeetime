import range from "lodash.range";
import { useCallback, useEffect, useState } from "react";
import Modal from "react-modal";

import { BrewsList } from "../components/BrewsList";
import { Button } from "../components/Button";
import { ButtonGroup } from "../components/ButtonGroup";
import { BackButton } from "../components/BackButton";
import { FixedFooter } from "../components/FixedFooter";
import { Main } from "../components/Layout";
import { Nav, NavHeading } from "../components/Nav";
import { Select } from "../components/Select";

import { useBrews } from "../hooks/use-brews-context";

import { getStaticRecipies } from "../utils/recipies";

Modal.setAppElement("#__next");

const TimelineView = ({ recipies }) => {
    const { brews, createBrew } = useBrews();

    const [modalIsOpen, setIsOpen] = useState(false);

    const recipeOptions = Object.keys(recipies).map((slug) => ({
        label: recipies[slug].name,
        value: slug,
    }));
    const [recipe, setRecipe] = useState(recipeOptions[0].value);

    const stepSize = 10;
    const volumeOptions = range(
        recipies[recipe]?.minWater,
        recipies[recipe]?.maxWater + stepSize,
        stepSize
    ).map((step) => ({
        label: `${step}ml`,
        value: `${step}`,
    }));
    const [volumeStr, setVolumeStr] = useState(volumeOptions[0].value);

    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);

    const onRecipeSelect = useCallback((value) => setRecipe(value), []);
    const onVolumeSelect = useCallback((value) => setVolumeStr(value), []);

    const onAddButtonClick = useCallback(() => {
        const volume = parseInt(volumeStr.replace("ml", ""));
        const brew = {
            coffee: Math.round((recipies[recipe].ratio / 1000) * volume),
            recipe,
            volume,
        };

        createBrew(brew).then(closeModal);
    }, [recipe, volumeStr]);

    useEffect(() => {
        if (volumeOptions.map(({ value }) => value).includes(volumeStr)) return;
        setVolumeStr(volumeOptions[0].value);
    }, [recipe]);

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
                <Button onClick={openModal} variant="large">
                    Add coffee consumption
                </Button>
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
                <ButtonGroup>
                    <Select
                        onChange={onRecipeSelect}
                        options={recipeOptions}
                        value={recipe}
                    />
                    <Select
                        onChange={onVolumeSelect}
                        options={volumeOptions}
                        value={volumeStr}
                    />
                </ButtonGroup>
                <ButtonGroup>
                    <Button onClick={onAddButtonClick} variant="large">
                        Add
                    </Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button onClick={closeModal}>Cancel</Button>
                </ButtonGroup>
            </Modal>
        </>
    );
};

export { getStaticRecipies as getStaticProps };

export default TimelineView;
