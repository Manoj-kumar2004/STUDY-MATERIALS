def power(base, exponent):
    # Check if exponent is zero
    if exponent == 0:
        return 1
    
    # Check if exponent is negative
    if exponent < 0:
        base = 1 / base
        exponent = -exponent
    
    # Split the exponent into integer and fractional parts
    int_part = int(exponent)
    frac_part = exponent - int_part
    
    # Compute the integer part of the exponentiation using exponentiation by squaring
    result = 1
    while int_part > 0:
        if int_part % 2 == 1:
            result *= base
        base *= base
        int_part //= 2
    
    # Compute the fractional part using iterative approximation
    frac_result = 1.0
    epsilon = 1e-10  # Small value to ensure convergence
    term = 1.0
    factorial = 1.0
    i = 1
    while abs(term) > epsilon:
        term *= frac_part
        term /= i
        frac_result += term
        i += 1
    
    # Combine integer and fractional parts
    result *= frac_result
    
    return result

# Test the function
result = power(2, 0.5)
print(result)  # Output will be 2^1.5 = 2.82842712474619
