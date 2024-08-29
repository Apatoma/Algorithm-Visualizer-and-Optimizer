def suggest_optimizations(code):
    suggestions = []

    # Basic optimization suggestions
    if 'for' in code and 'range(len(' in code:
        suggestions.append("Consider using 'enumerate' to iterate with index and value more efficiently.")
    
    if 'sorted(' in code and 'key=' not in code:
        suggestions.append("Use 'key' parameter in 'sorted()' to optimize sorting based on custom criteria.")

    # Add more checks for common inefficiencies here

    return suggestions
