import { numBiasSources } from "../../helpers/Ratings";
import { mockArticles } from "../mockData/mockArticles";

describe('numBiasSources()', () => {
    test("counts Left and Left-Center biased sources correctly", () => {
        expect(numBiasSources(mockArticles, "Left", "Left-Center")).toBe(9);
    });

    test("counts Right and Right-Center biased sources correctly", () => {
        expect(numBiasSources(mockArticles, "Right", "Right-Center")).toBe(14);
    });

    test("counts Non-Existant bias sources correctly", () => {

        expect(numBiasSources(mockArticles, null)).toBe(0);
    });
});