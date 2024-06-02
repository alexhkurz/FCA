# Fuzzy Formal Concept Analysis

Fuzzy FCA wrt the quantale $[0,1]$ with multiplication as multiplication.

From the commandline (tested on Mac):

```
git clone https://github.com/alexhkurz/FCA.git
cd FCA
open index.html
```

**Usage:**

- Modify the input boxes to specify a weighted relation and a weighted upset.
- Values range between 0 and 1.
- Missing triples and pairs are valued at 0.
- Computes the downset of the upset and the upset of the downset of the downset.
- Denoting the relation by $I$ and the weighted upset by $\psi$, the value of $x$ in the downset of the upset is $\bigwedge_a I(x,a)\lhd \psi(a)$ where $\lhd$ is truncated division (truncated to remain inside [0,1]). To mimic logical implication, division by $0$ gives $1$. Similarly, the value of $a$ in the upset of a downset $\phi$ is $\bigwedge_x \phi(x)\rhd I(a,x)$ where $\rhd$ is again truncated division.
