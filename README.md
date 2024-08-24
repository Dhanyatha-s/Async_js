# Machine Learning Model 

This project predicts the aqueous solubility (logS) of chemical compounds using molecular descriptors like MolLogP, MolWt, NumRotatableBonds, and AromaticProportion. The model is built using Python, with the machine learning model implemented in scikit-learn.

### Project Overview
The goal of this project is to build a linear regression model that can predict the logS value of chemical compounds. The dataset contains the following features:  

MolLogP: The partition coefficient, a measure of the compound's lipophilicity.  
MolWt: The molecular weight of the compound.  
NumRotatableBonds: The number of rotatable bonds in the compound.  
AromaticProportion: The proportion of aromatic atoms in the compound.  
The target variable is:  

logS: The logarithm of the solubility (S) of the compound in water.  

### Dependencies
To run this project, you'll need:

Python 3.x
scikit-learn
matplotlib
pandas
numpy

Our data is Quantitative hence building Regression Models using LinearRegression and Random Forest Regression

### Model Training and Evaluation  
The linear regression model is trained using the molecular descriptors as input features and logS as the target. The training is done using scikit-learn’s LinearRegression class.  

#### Evaluation  
The model's performance is evaluated by comparing the predicted logS values to the experimental logS values. The scatter plot provided shows the model's performance:  

The x-axis represents the experimental (true) logS values.  
The y-axis represents the predicted logS values.

![image](https://github.com/user-attachments/assets/c28a1088-85b8-4dfa-9a5a-a86f2932c1d2)  

The red diagonal line indicates perfect prediction (where predicted = actual).    
Scatter points represent the individual predictions. Points closer to the line indicate more accurate predictions, while points farther away indicate greater errors.  

### More Details On Prediction  
#### What the Graph Indicates:

Linearity: The red line represents the ideal case where the predicted logS values exactly match the experimental values. It is a diagonal line (slope = 1) that passes through the origin.  

Model Fit: The scatter points are fairly aligned along the diagonal line, suggesting that the model's predictions correlate well with the true values. However, there is some dispersion, indicating prediction errors.  

Prediction Quality:  

Points closer to the red line indicate accurate predictions (predicted values close to experimental values).  
Points farther from the line suggest larger prediction errors, where the model either overestimates or underestimates logS.  
Distribution: The scatter points are concentrated near the center, with some outliers at the extremes. This could suggest that the model performs well within a specific range of logS values but struggles more with extreme cases.  

#### Interpretation of the Model’s Predictions:
The plot suggests that the linear regression model is reasonably effective at predicting logS using the given molecular descriptors. The model captures the overall trend between experimental and predicted logS values but may have some variability and potential errors, especially for certain data points where predictions deviate more significantly from the actual values.  


Codes are commented inorder to categorize
