
// Mock service to simulate AI comparison
// In a real version, this would call an LLM API

export async function compareOptions(optionA, optionB, context) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(generateMockResponse(optionA, optionB, context));
        }, 2000); // Simulate "Thinking" delay
    });
}

function generateMockResponse(optionA, optionB, context) {
    // Simple heuristic for demo: If "React" is in optionA, it wins (just for fun/testing)
    // Otherwise random or canned responses for common tech stacks.

    const a = optionA.toLowerCase();
    const b = optionB.toLowerCase();

    if ((a.includes('react') && b.includes('vue')) || (b.includes('react') && a.includes('vue'))) {
        return {
            winner: a.includes('react') ? optionA : optionB,
            verdict: "React's Ecosystem Wins for Large Scale",
            summary: "While Vue is excellent for rapid prototyping and ease of use, React's massive ecosystem and job market make it the safer long-term bet for most enterprise contexts.",
            breakdown: [
                { category: "Learning Curve", a: "Steep (JSX, Hooks)", b: "Gentle (Templates)", advantage: b.includes('vue') ? optionB : optionA },
                { category: "Ecosystem", a: "Huge", b: "Growing but smaller", advantage: a.includes('react') ? optionA : optionB },
                { category: "Performance", a: "Virtual DOM overhead", b: "Optimized reactivity", advantage: b.includes('vue') ? optionB : optionA },
                { category: "Hiring", a: "Very Easy", b: "Moderate", advantage: a.includes('react') ? optionA : optionB }
            ]
        };
    }

    // Generic response if we don't recognize the inputs
    return {
        winner: optionA,
        verdict: `${optionA} might be the better fit`,
        summary: `Based on the context provided ('${context}'), ${optionA} appears to offer better alignment with your constraints, particularly regarding scalability.`,
        breakdown: [
            { category: "Cost Efficiency", a: "High", b: "Moderate", advantage: optionA },
            { category: "Ease of Integration", a: "Complex setup", b: "Plug-and-play", advantage: optionB },
            { category: "Scalability", a: "Industrial Grade", b: "Limited", advantage: optionA },
            { category: "Community Support", a: "Active", b: "Niche", advantage: optionA }
        ]
    };
}
