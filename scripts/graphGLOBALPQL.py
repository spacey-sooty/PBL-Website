import matplotlib.pyplot as plt
import numpy as np
x = np.arange(7)
y1 = [15.495, 11.75, 11.6233, 11.70815, 27.75, 16.1665, 5.4163]
y2 = [5.849, 16.2445, 42.542666, 1.8288, 2.236302, 1.4383298, 1.89943]
labels = ["New York", "London", "Beijing", "Paris", "Dubai", "Tokyo", "Moscow"]
width = 0.4
plt.title("The Effect of Temperature on Physical Quality of Life In Cities Across the World")
plt.bar(x+width/2, y1, width)
plt.bar(x+width/1, y2, width)
plt.xticks(x, labels)
plt.xlabel("Location")
plt.ylabel("Temperature(orange degrees celsius), PQL Index (blue)")
plt.show()