import React from "react";
//∧∨⇒⇔¬⊢
const Help = () => (
  <div className="text-left container">
    <h1 className="m-2 text-center">Help</h1>

    <div>
      <h2>Natural Deduction</h2>
      <p>
        Testing whether a proposition is a tautology by testing every possible
        truth assignment is expensive—there are exponentially many. We need a
        deductive system, which will allow us to construct proofs of tautologies
        in a step-by-step fashion.
      </p>
      <p>
        The system we will use is known as natural deduction. The system
        consists of a set of rules of inference for deriving consequences from
        premises. One builds a proof tree whose root is the proposition to be
        proved and whose leaves are the initial assumptions or axioms (for proof
        trees, we usually draw the root at the bottom and the leaves at the
        top).
      </p>
      <p>
        For example, one rule of our system is known as modus ponens.
        Intuitively, this says that if we know P is true, and we know that P
        implies Q, then we can conclude Q.
      </p>

      <p className="text-center font-weight-bold">P , P ⇒ Q ⊢ Q</p>

      <p>
        The propositions above the line are called premises; the proposition
        below the line is the conclusion. Both the premises and the conclusion
        may contain metavariables (in this case, P and Q) representing arbitrary
        propositions. When an inference rule is used as part of a proof, the
        metavariables are replaced in a consistent way with the appropriate kind
        of object (in this case, propositions).
      </p>
      <p>
        Most rules come in one of two flavors: introduction or elimination
        rules. Introduction rules introduce the use of a logical operator, and
        elimination rules eliminate it. Modus ponens is an elimination rule for
        ⇒. On the right-hand side of a rule, we often write the name of the
        rule. This is helpful when reading proofs. In this case, we have written
        (modus ponens). We could also have written (⇒-elim) to indicate that
        this is the elimination rule for ⇒.
      </p>
      <h3>Rules for Conjunction</h3>
      <p>Conjunction (∧) has an introduction rule and two elimination rules:</p>
      <p className="text-center font-weight-bold">I∧ - P , Q ⊢ P ∧ Q</p>
      <p className="text-center font-weight-bold">E∧ - P ∧ Q ⊢ P , Q</p>

      <h3>Rules for Implication</h3>
      <p>
        In natural deduction, to prove an implication of the form P ⇒ Q, we
        assume P, then reason under that assumption to try to derive Q. If we
        are successful, then we can conclude that P ⇒ Q.
      </p>
      <p>
        In a proof, we are always allowed to introduce a new assumption P, then
        reason under that assumption. We must give the assumption a name; we
        have used the name x in the example below. Each distinct assumption must
        have a different name
      </p>
      <p className="text-center font-weight-bold">Hyp: P</p>
      <p>
        Because it has no premises, this rule can also start a proof. It can be
        used as if the proposition P were proved. The name of the assumption is
        also indicated here.
      </p>
      <p>
        However, you do not get to make assumptions for free! To get a complete
        proof, all assumptions must be eventually discharged. This is done in
        the implication introduction rule. This rule introduces an implication P
        ⇒ Q by discharging a prior assumption [x : P]. Intuitively, if Q can be
        proved under the assumption P, then the implication P ⇒ Q holds without
        any assumptions. We write x in the rule name to show which assumption is
        discharged. This rule and modus ponens are the introduction and
        elimination rules for implications.
      </p>
      <p className="text-center font-weight-bold">I⇒ - Hyp: P...Q ⊢ P ⇒ Q</p>
      <p className="text-center font-weight-bold">E⇒ - P, P ⇒ Q ⊢ Q</p>
      <p>
        A proof is valid only if every assumption is eventually discharged. This
        must happen in the proof tree below the assumption. The same assumption
        can be used more than once.
      </p>
      <h3>Rules for equivalence</h3>
      <p className="text-center font-weight-bold">I⇔ - P ⇒ Q , Q ⇒ P ⊢ Q ⇔ P</p>
      <p className="text-center font-weight-bold">E⇔ - Q ⇔ P ⊢ P ⇒ Q , Q ⇒ P</p>
      <h3>Rules for Disjunction</h3>
      <p className="text-center font-weight-bold">P ⊢ P ∨ Q</p>
      <p className="text-center font-weight-bold">P ⇒ Q, R ⇒ Q, P ∨ R ⊢ Q</p>
      <h3>Rules for Negation</h3>
      <p>A negation ¬P can be considered an abbreviation for P ⇒ ⊥:</p>
      <p className="text-center font-weight-bold">
        I¬ - Hyp: P...Q ∧ Q ¬ ⊢ P ¬
      </p>
      <p className="text-center font-weight-bold">E¬ - P ¬¬ ⊢ P</p>

      <h2>Proofs</h2>
      <p>
        A proof of proposition P in natural deduction starts from axioms and
        assumptions and derives P with all assumptions discharged. Every step in
        the proof is an instance of an inference rule with metavariables
        substituted consistently with expressions of the appropriate syntactic
        class.
      </p>
    </div>
  </div>
);

/* const Help2 = () => (
    <div>
        <h2><a name="1">Natural Deduction</a></h2>

<p>Testing whether a proposition is a tautology by testing every possible
truth assignment is expensive&mdash;there are exponentially many.
We need a <strong>deductive system</strong>, which will allow us to construct
proofs of tautologies in a step-by-step fashion.<p>

<p>The system we will use is known as <strong>natural deduction</strong>.  The system
consists of a set of <strong>rules of inference</strong> for deriving consequences from premises.  One builds a
proof tree whose root is the proposition to be proved and whose leaves are the
initial assumptions or axioms (for proof trees, we usually draw the root at the
bottom and the leaves at the top).

<p>For example, one rule of our system is known as <strong>modus ponens</strong>.
Intuitively, this says that if we know P is true, and we know that P implies Q, then we
can conclude Q.
</p>

<table align=center><tr><td>
<table align=center class=rule cellspacing=0 cellpadding=0>
<tr class=ruletop>
<td><span class=symbol>P</span></td> <td>P ⇒ Q</td></tr>
<tr><td colspan=2><span class=symbol>Q</span></td></tr>
</table>
<td>(modus ponens)</td>
</table>

<p>The propositions above the line are called <strong>premises</strong>; the
proposition below the line is the <strong>conclusion</strong>.  Both the
premises and the conclusion may contain metavariables (in this case, P and Q)
representing arbitrary propositions. When an inference rule is used as part of a
proof, the metavariables are replaced in a consistent way with the appropriate
kind of object (in this case, propositions).
</p>

<p>Most rules come in one of two flavors: <strong>introduction</strong> or
<strong>elimination</strong> rules. Introduction rules introduce the use of
a logical operator, and elimination rules eliminate it. Modus ponens is
an elimination rule for <span class=symbol>⇒</span>.
On the right-hand side of a rule, we often write the name of the rule.
This is helpful when reading proofs. In this case, we have written 
(modus ponens).  We could also have written <span class=symbol>(⇒-elim)</span>
to indicate that this is the elimination rule for <span class=symbol>⇒</span>.
</p>

<h4>Rules for Conjunction</h4>

<p>
Conjunction <span class=symbol>(∧)</span> has an introduction rule and two elimination rules:
</p>

<table align=center>
<tr>
<td>
<table align=center class=rule cellspacing=0 cellpadding=0>
<tr class=ruletop>
<td><span class=symbol>P</span></td> <td><span class=symbol>Q</span></td></tr>
<tr><td colspan=2><span class=symbol>P ∧ Q</span></td>
</table>
<td class=rulename>
<span class=symbol>(∧-intro)</span>
</td>
<td>
<table align=center class=rule cellspacing=0 cellpadding=0>
<tr class=ruletop>
<td><span class=symbol>P ∧ Q</span></td>
<tr><td colspan=1><span class=symbol>P</span></td>
</table>
<td class=rulename>
<span class=symbol>(∧-elim-left)</span>
</td>
<td>
<table align=center class=rule cellspacing=0 cellpadding=0>
<tr class=ruletop>
<td><span class=symbol>P ∧ Q</span></td>
<tr><td colspan=1><span class=symbol>Q</span></td>
</table>
<td class=rulename>
<span class=symbol>(∧-elim-right)</span>
</td>
</table>

<h4>Rule for T</h4>

<p>
The simplest introduction rule is the one for T.  It is called "unit".
Because it has no premises, this rule is an <strong>axiom</strong>: something
that can start a proof.
</p>
<table align=center><tr><td>
<table align=center class=rule cellspacing=0 cellpadding=0>
<tr class=ruletop>
<td>&nbsp;</td>
<tr><td colspan=1>T</td>
</table>
<td>(unit)</td>
</table>

<h4>Rules for Implication</h4>

<p>In natural deduction, to prove an implication of the form P ⇒ Q, we assume P,
then reason under that assumption to try to derive Q.  If we are successful, then
we can conclude that P ⇒ Q.</p>

<p>In a proof, we are always allowed to introduce
a new assumption P, then reason under that assumption.  We must give
the assumption a name; we have used the name x in the example below.
Each distinct assumption must have a different name.</p>

<table align=center><tr><td>
<table align=center class=rule cellspacing=0 cellpadding=0>
<tr class=ruletop>
<td>&nbsp;</td>
<tr><td colspan=1>[x : P]</td>
</table>
<td>(assum)</td>
</table>
</p>

<p class=cont>
Because it has no premises, this rule can also start a proof.
It can be used as if the proposition P were proved.
The name of the assumption is also indicated here.
</p>

<p>However, you do not get to make assumptions for free!  To get a complete proof, all assumptions must be eventually <em>discharged</em>.  This is done in the implication introduction rule.
This rule introduces an implication P ⇒ Q by discharging a
prior assumption [x : P].  Intuitively, if Q can be proved under the assumption P, then the implication
P ⇒ Q holds without any assumptions.  We write x in the rule name to show which assumption
is discharged.  This rule and modus ponens are the introduction and elimination rules for implications.

<table align=center><tr><td>
<table align=center class=rule cellspacing=0 cellpadding=0>
<tr class=ruletop>
<td>[x : P]<br>
      ⋮<br>
      Q
</td>
<tr><td>P ⇒ Q</td>
</table>
<td class=rulename>(⇒-intro/x)</td>
<td>
<table align=center class=rule cellspacing=0 cellpadding=0>
<tr class=ruletop>
<td>P</td> <td> P ⇒ Q</td>
<tr><td colspan=2>Q</td>
</table>
<td>(⇒-elim, modus ponens)</td></table>

<p class=cont>
A proof is valid only if every assumption is eventually discharged.  This must happen in the
proof tree below the assumption. The same assumption can be used more than once.
</p>

<h4>Rules for Disjunction</h4>

<table align=center cellpadding=2ex>
<tr>
<td>
<table align=center class=rule cellspacing=0>
<tr class=ruletop>
<td>P</td>
<tr><td colspan=1>P ∨ Q</td>
</table>
<td class=rulename>
(∨-intro-left)
</td>
<td>
<table align=center class=rule cellspacing=0 cellpadding=0>
<tr class=ruletop>
<td>Q</td>
<tr><td colspan=1>P ∨ Q</td>
</table>
<td class=rulename>
(∨-intro-right)
</td>
<td colspan=2>
<table align=center class=rule cellspacing=0 cellpadding=0>
<tr class=ruletop>
<td>P ∨ Q  <td>P ⇒ R  <td>Q ⇒ R
<tr><td colspan=3>R</td>
</table>
<td class=rulename>
(∨-elim)
</td>
</table>

<h4>Rules for Negation</h4>

<p>
A negation ¬P can be considered an abbreviation for P ⇒ ⊥:
</p>

<table align=center cellpadding=2ex>
<tr>
<td>
<table align=center class=rule cellspacing=0>
<tr class=ruletop>
<td>P ⇒ ⊥
<tr><td>¬P</td>
</table>
<td class=rulename>
(¬-intro)
</td>
<td>
<table align=center class=rule cellspacing=0>
<tr class=ruletop>
<td>¬P</td>
<tr>
<td>P ⇒ ⊥</td>
</table>
<td class=rulename>
(¬-elim)
</td>
</table>

<h4>Rules for Falsity</h4>

<table align=center><tr><td>
<table align=center class=rule cellspacing=0 cellpadding=0>
<tr class=ruletop>
<td>[x : ¬P]<br>
      ⋮<br>
      ⊥<br>
</td>
<tr><td>P</td>
</table>
<td class=rulename>(reductio ad absurdum, RAA/x)</td>
<td>
<table align=center class=rule cellspacing=0 cellpadding=0>
<tr class=ruletop>
<td>⊥</td>
<tr><td colspan=2>P</td>
</table>
<td>(ex falso quodlibet, EFQ)</td></table>

<p><em>Reductio ad absurdum</em> (RAA) is an interesting rule. It embodies
proofs by contradiction.  It says that if by assuming that P
is false we can derive a contradiction, then P
must be true.  The assumption x is discharged in the application of this rule.
This rule is present in classical logic but not in 
<strong>intuitionistic</strong> (constructive) logic.  In intuitionistic logic,
a proposition is not considered true simply because its negation is false.</p>

<h4>Excluded Middle</h4>

<p>Another classical tautology that is not intuitionistically valid is
the <strong>the law of the excluded middle</strong>, P ∨ ¬P.
We will take it as an axiom in our system.
The Latin name for this rule is <em>tertium non datur</em>, but we will call it <em>magic</em>.
</p>

<table align=center><tr><td>
<table align=center class=rule cellspacing=0 cellpadding=0>
<tr class=ruletop>
<td>&nbsp;</td>
<tr><td colspan=1>P ∨ ¬P</td>
</table>
<td>(magic)</td>
</table>
</p>

<h2><a name="2">Proofs</a></h2>
<p>
A proof of proposition P in natural deduction starts from axioms and assumptions
and derives P with all assumptions discharged. Every step in the
proof is an instance of an inference rule with metavariables substituted
consistently with expressions of the appropriate syntactic class.

<h3>Example</h3>

</p>
For example, here is a proof of the proposition
<span className='symbol'>(A ⇒ B ⇒ C) ⇒ (A ∧ B ⇒ C)</span>.


<p>The final step in the proof is to derive
<span className='symbol'>(A ⇒ B ⇒ C) ⇒ (A ∧ B ⇒ C)</span> from <span className='symbol'>(A ∧ B ⇒ C)</span>, which is done using the
rule <span className='symbol'>(⇒-intro)</span>, discharging the assumption [x : <span className='symbol'>A ⇒ B ⇒ C</span>].
To see how this rule generates the proof step,
substitute for the metavariables P, Q, x in the rule as follows:
P = <span className='symbol'>(A ⇒ B ⇒ C)</span>, Q = <span className='symbol'>(A ∧ B ⇒ C)</span>, and x = x. The immediately previous step
uses the same rule, but with a different substitution:
P = <span className='symbol'>A ∧ B</span>, Q = C, x = y.
</p>

<p>The proof tree for this example has the following form, with the proved
proposition at the root and axioms and assumptions at the leaves.</p>


<p>A proposition that has a complete proof in a deductive system is called a
<strong>theorem</strong> of that system.</p>

<h3>Soundness and Completeness</h3>

<p>A measure of a deductive system's power is whether it is powerful enough to prove
all true statements.  A deductive system is said to be <strong>complete</strong> if all
true statements are theorems (have proofs in the system).  For propositional logic and
natural deduction, this means that all tautologies must have natural deduction proofs.
Conversely, a deductive system is called <strong>sound</strong> if all theorems
are true.  The proof rules we have given above are in fact sound and complete for propositional logic:
every theorem is a tautology, and every tautology is a theorem.
</p>

<p>Finding a proof for a given tautology can be difficult. But once the proof
is found, checking that it is indeed a proof is completely mechanical, requiring no
intelligence or insight whatsoever.  It is therefore a very strong argument
that the thing proved is in fact true.
</p>
<p>
We can also make writing proofs less tedious by adding more rules
that provide reasoning shortcuts. These rules are sound
if there is a way to convert a proof using them into a proof using the
original rules. Such added rules are called <strong>admissible</strong>.
</p>
    </div>
) */

export default Help;
